import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaFileAlt, FaPalette, FaSignOutAlt, FaBars } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
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

    fetch(`/api/resumes/${parsedUser._id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data && data.resumes) {

          setResumes(data.resumes);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
        setError("Failed to load resumes");
        setLoading(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleDeleteResume = (resumeId) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      fetch(`/api/resumes/delete/${resumeId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setResumes(resumes.filter((resume) => resume._id !== resumeId));
          } else {
            alert("Failed to delete resume.");
          }
        })
        .catch((error) => console.error("Error deleting resume:", error));
    }
  };

  // Sidebar toggle
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
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
          Create Resume
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
          Your Resumes
        </h2>
        {resumes.length > 0 ? (
          <ul className="space-y-4">
            {resumes.map((resume) => (
              <li key={resume._id} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{resume.name}</h3>
                <p className="text-gray-400">{resume.email}</p>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
                  onClick={() => navigate(`/resume/${resume._id}`)}
                >
                  View
                </button>
                <button
                  className="mt-2 px-4 py-2 bg-red-600 rounded hover:bg-red-500 transition ml-2"
                  onClick={() => handleDeleteResume(resume._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No resumes created yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;