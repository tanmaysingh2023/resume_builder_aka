import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg border-2 border-white">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-neon-pink drop-shadow-neon-pink">
            My Resume
          </h1>
          <h2 className="text-3xl mt-2 text-neon-blue">{resume.name}</h2>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <p className="text-lg text-gray-300">
            📧 Email: {resume.email} | 📞 Phone: {resume.phone}
          </p>
        </div>

        {/* Professional Profiles */}
        <Section title="Professional Profiles">
          <ul className="space-y-2">
            {resume.profiles?.length ? (
              resume.profiles.map((profile, index) => (
                <li key={index}>
                  {profile.link ? (
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-pink hover:underline"
                    >
                      {profile.platform}
                    </a>
                  ) : (
                    <span>{profile.platform || "N/A"}</span>
                  )}
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-2">
            {resume.education?.length ? (
              resume.education.map((edu, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg">
                  <strong>{edu.degree}</strong> - {edu.institute} ({edu.tenure})
                  <br /> Score: {edu.score}, Position: {edu.position}
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </ul>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <ul className="space-y-2">
            {resume.workExperience?.length ? (
              resume.workExperience.map((exp, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg">
                  <strong>{exp.title}</strong> ({exp.tenure})
                  <br /> {exp.description}
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </ul>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <ul className="space-y-2">
            {resume.projects?.length ? (
              resume.projects.map((proj, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg">
                  <strong>{proj.title}</strong> ({proj.tenure})
                  <br /> {proj.description}
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </ul>
        </Section>

        {/* Achievements */}
        <Section title="Technical Achievements">
          <ul className="space-y-2">
            {resume.achievements?.length ? (
              resume.achievements.map((ach, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded-lg">
                  <strong>{ach.title}</strong> ({ach.tenure})
                  <br /> {ach.description}
                </li>
              ))
            ) : (
              <p>N/A</p>
            )}
          </ul>
        </Section>

        {/* PDF Download Button */}
        {pdfUrl && (
          <div className="mt-8 text-center">
            <a href={pdfUrl} download={`resume_${resumeId}.pdf`}>
              <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                Download PDF
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-2xl font-bold text-neon-blue drop-shadow-neon-blue mb-4">
      {title}
    </h3>
    {children}
  </div>
);

export default ResumePage;
