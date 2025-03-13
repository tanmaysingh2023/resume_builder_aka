import React, { useEffect, useState } from "react";


const ResumePage = () => {
  const { resumeId } = useParams();
  const [resume, setResume] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    fetch(`/api/resume/${resumeId}`)
      .then((response) => response.json())
      .then((data) => {
        setResume(data);
        setPdfUrl(`/api/download-pdf/${resumeId}`);
      })
      .catch((error) => console.error("Error fetching resume:", error));
  }, [resumeId]);

  if (!resume) {
    return <div className="resume-page-container">Loading...</div>;
  }

  return (
    <div className="resume-page-container">
      <div className="resume-page-header">
        <h1>My Resume</h1>
        <h2>{resume.name}</h2>
      </div>

      <div className="resume-page-contact">
        <p>Email: {resume.email}</p>
        <p>Phone: {resume.phone}</p>
      </div>

      <h3 className="resume-page-section-title">Professional Profiles</h3>
      <ul className="resume-page-list">
        {resume.profiles?.map((profile, index) => (
          <li key={index}>
            {profile.link ? (
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                {profile.platform}
              </a>
            ) : (
              <span>{profile.platform || "N/A"}</span>
            )}
          </li>
        )) || <p>N/A</p>}
      </ul>

      <h3 className="resume-page-section-title">Education</h3>
      <ul className="resume-page-list">
        {resume.education?.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.institute} ({edu.tenure})
            <br /> Score: {edu.score}, Position: {edu.position}
          </li>
        )) || <p>N/A</p>}
      </ul>

      {/* <h3 className="resume-page-section-title">Job Description</h3>
      <p>{resume.jobDescription || "N/A"}</p>

      <h3 className="resume-page-section-title">Targeted Companies</h3>
      <p>{resume.targetedCompanies || "N/A"}</p> */}

      <h3 className="resume-page-section-title">Work Experience</h3>
      <ul className="resume-page-list">
        {resume.workExperience?.map((exp, index) => (
          <li key={index}>
            <strong>{exp.title}</strong> ({exp.tenure})
            <br /> {exp.description}
          </li>
        )) || <p>N/A</p>}
      </ul>

      <h3 className="resume-page-section-title">Projects</h3>
      <ul className="resume-page-list">
        {resume.projects?.map((proj, index) => (
          <li key={index}>
            <strong>{proj.title}</strong> ({proj.tenure})
            <br /> {proj.description}
          </li>
        )) || <p>N/A</p>}
      </ul>

      <h3 className="resume-page-section-title">Technical Achievements</h3>
      <ul className="resume-page-list">
        {resume.achievements?.map((ach, index) => (
          <li key={index}>
            <strong>{ach.title}</strong> ({ach.tenure})
            <br /> {ach.description}
          </li>
        )) || <p>N/A</p>}
      </ul>

      {pdfUrl && (
        <div className="resume-page-download">
          <a href={pdfUrl} download={`resume_${resumeId}.pdf`}>
            <button>Download PDF</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumePage;
