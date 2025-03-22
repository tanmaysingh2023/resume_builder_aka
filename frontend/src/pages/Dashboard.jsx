import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaFileAlt, FaPalette, FaSignOutAlt, FaBars } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [akaResumes, setAkaResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/home");
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    fetch(`/api/aka_resume/${parsedUser._id}`)  // This will be proxied to your backend
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched aka_resumes:", data);
        if (data && data.resumes) {
          setAkaResumes(data.resumes);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching aka_resumes:", error);
        setError("Failed to load akaResumes");
        setLoading(false);
        
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleDeleteAkaResume = (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      fetch(`/api/aka_resume/delete/${resumeId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setAkaResumes(akaResumes.filter((resume) => resume._id !== resumeId));
          } else {
            alert("Failed to delete resume.");
          }
        })
        .catch((error) => console.error("Error deleting aka_resume:", error));
    }
  };

  const handleViewAkaResume = (resume) => {
    navigate(`/aka_resume/${resume._id}?templateId=${resume.templateId}`);
  };
  

  return (
    <div className="min-h-screen bg-black text-white p-6 pt-20">
      <h1 className="text-5xl text-neon-purple font-bold drop-shadow-neon-pink mb-6 text-center">
        {user ? user.name : "Dashboard"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => navigate("/resume-builder")}
          className="bg-neon-purple text-white p-4 rounded-lg shadow-neon-cyan hover:scale-105 transition-transform text-center"
        >
          Create AkaResume
        </button>

        <button
          onClick={() => navigate("/templates")}
          className="bg-neon-pink text-white p-4 rounded-lg shadow-neon-cyan hover:scale-105 transition-transform text-center"
        >
          View Templates
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-4 rounded-lg shadow-red-600 hover:scale-105 transition-transform text-center"
        >
          Logout
        </button>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl text-neon-blue font-bold drop-shadow-neon-blue mb-4">
          Your AkaResumes
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-gray-400">{error}</p>
        ) : akaResumes.length > 0 ? (
          <ul className="space-y-4">
            {akaResumes.map((resume) => (
              <li key={resume._id} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">
                  {resume.data.name || "Untitled AkaResume"}
                </h3>
                <p className="text-sm text-gray-400">
                  Created on: {new Date(resume.createdAt).toLocaleDateString()}
                </p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                  onClick={() => handleViewAkaResume(resume)}
                >
                  View
                </button>
                <button
                  className="mt-2 px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition ml-2"
                  onClick={() => handleDeleteAkaResume(resume._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No akaResumes created yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
