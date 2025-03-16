import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CreateAkaResumePage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  
  // Get user data from localStorage on mount
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  
  // Initialize resumeData with a placeholder for userId
  const [resumeData, setResumeData] = useState({
    userId: "",
    templateId, // e.g., "temp1", "temp2", etc.
    data: {
      title: '',
      summary: '',
      // Add additional fields as needed for your template
    },
  });
  
  // Once user data is available, update resumeData with userId
  useEffect(() => {
    if (user) {
      setResumeData((prev) => ({
        ...prev,
        userId: user._id,
      }));
    }
  }, [user]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/aka_resume', {  // using relative URL with proxy
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      const newResume = await response.json();
      console.log('AkaResume saved:', newResume);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating aka_resume:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        Create AkaResume (Template: {templateId})
      </h1>
      <div className="mb-4">
        <label className="block mb-1">Resume Title</label>
        <input
          name="title"
          value={resumeData.data.title}
          onChange={handleChange}
          className="p-2 rounded text-black w-full"
          placeholder="Enter your resume title"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Summary</label>
        <textarea
          name="summary"
          value={resumeData.data.summary}
          onChange={handleChange}
          className="p-2 rounded text-black w-full"
          placeholder="Write a short summary..."
        />
      </div>
      {/* Additional fields for experiences, education, skills, awards, etc. */}
      <button
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
      >
        Save AkaResume
      </button>
    </div>
  );
};

export default CreateAkaResumePage;
