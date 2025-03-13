import React from "react";
import { useNavigate } from "react-router-dom";
 // Import the CSS for styling the templates

const TemplatesPage = () => {
    const navigate = useNavigate();

    // Sample templates array (you can expand this with actual template thumbnails or designs)
    const templates = [
        { id: 1, name: "Template 1", description: "A modern, clean design" },
        { id: 2, name: "Template 2", description: "Professional and sleek" },
        { id: 3, name: "Template 3", description: "Minimalistic layout" },
    ];

    return (
        <div className="templates-container">
            <h1>Choose a Template</h1>
            <div className="templates-grid">
                {templates.map((template) => (
                    <div key={template.id} className="template-card">
                        <div className="template-thumbnail"> {/* Add a thumbnail preview here */}
                            <p>{template.name}</p>
                        </div>
                        <p>{template.description}</p>
                        <button 
                            onClick={() => navigate(`/resume-builder?templateId=${template.id}`)} 
                            className="select-template-btn"
                        >
                            Use This Template
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplatesPage;
