import React, { useState } from 'react';

function ResumeForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        profiles: {},
        skills: [],
        education: {}
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProfileChange = (e, key) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            profiles: { ...prev.profiles, [key]: value }
        }));
    };

    const handleSkillChange = (e) => {
        setFormData((prev) => ({ ...prev, skills: e.target.value.split(',') }));
    };

    const handleEducationChange = (e, key, field) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            education: {
                ...prev.education,
                [key]: { ...prev.education[key], [field]: value }
            }
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        console.log(token)
        if (!token) {
            alert("User is not logged in. Please log in first.");
            return;
        }

        try {
            const response = await fetch("/api/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            
            const data = await response.json();
            if (response.ok) {
                alert("Resume submitted successfully!");
                if (onSubmit) onSubmit();
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error submitting resume:", error);
            alert("Failed to submit resume.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            
            <textarea placeholder="Profiles (key:value)" onChange={(e) => handleProfileChange(e, 'LinkedIn')} />
            <textarea placeholder="Skills (comma-separated)" onChange={handleSkillChange} />
            
            <input placeholder="Institute" onChange={(e) => handleEducationChange(e, 'education1', 'institute')} />
            <input placeholder="Tenure" onChange={(e) => handleEducationChange(e, 'education1', 'tenure')} />
            <input placeholder="Score" onChange={(e) => handleEducationChange(e, 'education1', 'score')} />
            
            <button type="submit">Generate Resume</button>
        </form>
    );
}

export default ResumeForm;
