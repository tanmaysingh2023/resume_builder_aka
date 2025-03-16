import React, { useState } from "react";

const RForm = ({ onDataChange }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        profiles: [{ platform: "", link: "" }],
        education: [{ degree: "", institute: "", tenure: "", score: "" }],
        workExperience: [{ title: "", description: "", tenure: "" }],
        projects: [{ title: "", description: "", tenure: "" }],
        achievements: [{ title: "", description: "", tenure: "" }],
        skills: [""],
        targetedCompanies: "",
        jobDescription: "",
    });

    // Handle input changes
    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
        onDataChange({ ...formData, [field]: e.target.value });
    };

    const handleArrayChange = (index, field, value, section) => {
        const updatedSection = [...formData[section]];
        updatedSection[index][field] = value;
        setFormData({ ...formData, [section]: updatedSection });
        onDataChange({ ...formData, [section]: updatedSection });
    };

    const addNewEntry = (section, newEntry) => {
        setFormData({ ...formData, [section]: [...formData[section], newEntry] });
    };

    return (
        <div className="bg-black text-white p-6 rounded-xl shadow-lg w-1/3 pt-20">
            <h2 className="text-2xl font-bold text-neon-blue mb-4">Personal Details</h2>
            <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-neon-blue"
            />

            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-neon-blue"
            />

            <input
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => handleChange(e, "phone")}
                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-neon-blue"
            />

            {/* Skills Section */}
            <h2 className="text-2xl font-bold text-neon-blue mt-6">Skills</h2>
            {formData.skills.map((skill, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => handleArrayChange(index, "skill", e.target.value, "skills")}
                    className="w-full p-2 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-neon-blue"
                />
            ))}
            <button
                onClick={() => addNewEntry("skills", "")}
                className="bg-neon-blue text-black p-2 rounded-lg w-full mt-2"
            >
                Add Skill
            </button>

            {/* Education Section */}
            <h2 className="text-2xl font-bold text-neon-blue mt-6">Education</h2>
            {formData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <input
                        type="text"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => handleArrayChange(index, "degree", e.target.value, "education")}
                        className="w-full p-2 rounded-lg bg-gray-800 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Institute"
                        value={edu.institute}
                        onChange={(e) => handleArrayChange(index, "institute", e.target.value, "education")}
                        className="w-full p-2 rounded-lg bg-gray-800 text-white"
                    />
                    <input
                        type="text"
                        placeholder="Tenure"
                        value={edu.tenure}
                        onChange={(e) => handleArrayChange(index, "tenure", e.target.value, "education")}
                        className="w-full p-2 rounded-lg bg-gray-800 text-white"
                    />
                </div>
            ))}
            <button
                onClick={() => addNewEntry("education", { degree: "", institute: "", tenure: "" })}
                className="bg-neon-blue text-black p-2 rounded-lg w-full"
            >
                Add Education
            </button>

            {/* Targeted Companies & Job Description */}
            <h2 className="text-2xl font-bold text-neon-blue mt-6">Targeted Job Details</h2>
            <input
                type="text"
                placeholder="Targeted Companies"
                value={formData.targetedCompanies}
                onChange={(e) => handleChange(e, "targetedCompanies")}
                className="w-full p-2 rounded-lg bg-gray-800 text-white"
            />

            <textarea
                placeholder="Job Description"
                value={formData.jobDescription}
                onChange={(e) => handleChange(e, "jobDescription")}
                className="w-full p-2 rounded-lg bg-gray-800 text-white"
            />

            {/* Submit Button */}
            <button
                onClick={() => console.log("Submitted Data:", formData)}
                className="bg-neon-blue text-black p-2 rounded-lg w-full mt-4"
            >
                Submit Resume
            </button>
        </div>
    );
};

export default RForm;
