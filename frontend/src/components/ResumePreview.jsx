import React from 'react';

function ResumePreview({ resumeData }) {
    return (
        <div className="resume-preview">
            <h1>{resumeData.name}</h1>
            <p>Email: {resumeData.email}</p>
            <h3>Profiles:</h3>
            <ul>
                {Object.keys(resumeData.profiles).map(profile => (
                    <li key={profile}>{profile}: {resumeData.profiles[profile]}</li>
                ))}
            </ul>
            <h3>Skills:</h3>
            <ul>
                {resumeData.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h3>Education:</h3>
            {Object.keys(resumeData.education).map(institute => (
                <div key={institute}>
                    <p>{institute}</p>
                    <p>{resumeData.education[institute].tenure}</p>
                    <p>Score: {resumeData.education[institute].score}</p>
                </div>
            ))}
        </div>
    );
}

export default ResumePreview;
