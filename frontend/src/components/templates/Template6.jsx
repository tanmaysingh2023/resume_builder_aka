import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

// Sample data structure for Template6
const initialResume6 = {
  name: "TOM CLEVERLY",
  title: "Product Marketing Manager | Data-Driven Strategy",
  phone: "help@enhancv.com",
  location: "Virginia Beach, VA",
  summary:
    "With over 7 years of experience, I specialize in strategic marketing initiatives and data analytics, achieving significant growth in customer engagement and lead conversion. Highly passionate about brand positioning and a 25% average conversion boost.",
  experiences: [
    {
      role: "Marketing Manager",
      company: "BLANK Corporation",
      duration: "01/2022 – Present",
      location: "Virginia Beach, VA",
      details: [
        "Oversaw planning and execution for product launches and large-scale corporate events, significantly boosting brand visibility.",
        "Developed data-driven insights that informed marketing strategy and improved ROI by 30%.",
      ]
    },
    {
      role: "Digital Marketing Manager",
      company: "XYZ Tech",
      duration: "08/2019 – 12/2021",
      location: "Dallas, TX",
      details: [
        "Managed a cross-functional marketing team of 8 and grew B2B inbound leads by 40%.",
        "Launched multiple integrated campaigns across email, social media, and PPC, resulting in a 20% increase in customer retention.",
      ]
    },
    {
      role: "Marketing Freelancer",
      company: "Self-Employed",
      duration: "01/2017 – 07/2019",
      location: "Arlington, TX",
      details: [
        "Consulted for small businesses to develop brand positioning, social media strategy, and lead generation funnels.",
        "Achieved a 15% average conversion rate increase across diverse clients."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Marketing",
      school: "University of Blair",
      location: "Oxford, UK",
      graduation: "09/2012 – 06/2016"
    },
    {
      degree: "Global Business Exchange Program",
      school: "Cambridge University",
      location: "Cambridge, UK",
      graduation: "01/2015 – 06/2015"
    }
  ],
  certifications: [
    "Certified in Digital Analytics: CBM Systems & Appsflyer",
    "Competitive Intelligence Specialist"
  ],
  achievements: [
    "Data-Driven Marketing — Optimized all strategic digital campaigns using Google Ads and Analytics for enhanced performance",
    "Innovative Research — Spearheaded an in-house data analysis project, resulting in a 15% improvement in lead quality",
    "Community Engagement — Facilitated local networking events, fostering relationships with key influencers"
  ],
  languages: [
    "English (Native)",
    "Spanish (Native)",
    "French (Intermediate)"
  ]
};

const ResumeLayoutTemplate6 = React.forwardRef(
  (
    {
      resume,
      isEditing,
      // Handlers
      handleChange,
      handleAddExperience,
      handleAddDetail,
      handleAddEducation,
      handleAddCertification,
      handleAddAchievement,
      handleAddLanguage,
      handleExperienceChange,
      handleDetailChange,
      handleEducationChange,
      handleCertificationChange,
      handleAchievementChange,
      handleLanguageChange
    },
    ref
  ) => {
    // Container style
    const containerClasses = isEditing
      ? "max-w-5xl mx-auto my-10 p-8 bg-gray-50 border border-gray-300 shadow-md rounded-lg"
      : "max-w-5xl mx-auto my-10 p-8 bg-white border border-gray-200 shadow-sm rounded-lg";

    return (
      <div ref={ref} className={containerClasses}>
        {/* Header section */}
        <header className="w-full mb-8">
          <div className="bg-gray-100 p-4 rounded-t-lg text-center">
            {isEditing ? (
              <>
                <div className="mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    value={resume.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl font-bold text-gray-800"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={resume.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-600"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      value={resume.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      value={resume.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold text-gray-800">{resume.name}</h1>
                <p className="text-sm text-gray-600 mt-1">{resume.title}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {resume.phone} | {resume.location}
                </p>
              </>
            )}
          </div>
        </header>

        {/* Summary section */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
            Summary
          </h2>
          {isEditing ? (
            <textarea
              value={resume.summary || ""}
              onChange={(e) => handleChange("summary", e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-700"
              rows={4}
            />
          ) : (
            <p className="text-sm text-gray-700 leading-relaxed">
              {resume.summary}
            </p>
          )}
        </section>

        {/* Relevant Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-3">
            Relevant Experience
          </h2>
          {resume.experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              {isEditing ? (
                <>
                  <div className="mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) =>
                        handleExperienceChange(index, "role", e.target.value)
                      }
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm font-semibold text-gray-800"
                    />
                  </div>
                  <div className="mb-2 flex flex-col sm:flex-row gap-2">
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(index, "company", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-600"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) =>
                          handleExperienceChange(index, "duration", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm italic text-gray-500"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) =>
                          handleExperienceChange(index, "location", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-500"
                      />
                    </div>
                  </div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                    Details
                  </label>
                  {exp.details.map((detail, dIndex) => (
                    <textarea
                      key={dIndex}
                      value={detail}
                      onChange={(e) =>
                        handleDetailChange(index, dIndex, e.target.value)
                      }
                      className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                      rows={2}
                    />
                  ))}
                  <button
                    onClick={() => handleAddDetail(index)}
                    className="text-xs text-blue-600 hover:underline"
                  >
                    + Add Detail
                  </button>
                </>
              ) : (
                <>
                  <h3 className="text-sm font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-sm text-gray-600">
                    {exp.company} | {exp.duration} | {exp.location}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex}>{detail}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={handleAddExperience}
              className="text-xs text-blue-600 hover:underline"
            >
              + Add Experience
            </button>
          )}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-3">
            Education
          </h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4">
              {isEditing ? (
                <>
                  <div className="mb-2 flex flex-col sm:flex-row gap-2">
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Degree
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) =>
                          handleEducationChange(index, "degree", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm font-semibold text-gray-800"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        School
                      </label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) =>
                          handleEducationChange(index, "school", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-600"
                      />
                    </div>
                  </div>
                  <div className="mb-2 flex flex-col sm:flex-row gap-2">
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={edu.location}
                        onChange={(e) =>
                          handleEducationChange(index, "location", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-gray-500"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                        Graduation
                      </label>
                      <input
                        type="text"
                        value={edu.graduation}
                        onChange={(e) =>
                          handleEducationChange(index, "graduation", e.target.value)
                        }
                        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm italic text-gray-500"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-800 font-semibold">
                    {edu.degree} | {edu.school}
                  </p>
                  <p className="text-sm text-gray-500">
                    {edu.location} | {edu.graduation}
                  </p>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={handleAddEducation}
              className="text-xs text-blue-600 hover:underline"
            >
              + Add Education
            </button>
          )}
        </section>

        {/* Bottom bar for certifications, achievements, languages */}
        <section className="mt-8 border-t pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {/* Achievements */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
              Achievements
            </h3>
            {isEditing ? (
              <>
                {resume.achievements.map((ach, index) => (
                  <textarea
                    key={index}
                    value={ach}
                    onChange={(e) => handleAchievementChange(index, e.target.value)}
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs"
                    rows={2}
                  />
                ))}
                <button
                  onClick={handleAddAchievement}
                  className="text-xs text-blue-600 hover:underline"
                >
                  + Add Achievement
                </button>
              </>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {resume.achievements.map((ach, index) => (
                  <li key={index}>{ach}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Certification */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
              Certification
            </h3>
            {isEditing ? (
              <>
                {resume.certifications?.map((cert, index) => (
                  <textarea
                    key={index}
                    value={cert}
                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs"
                    rows={2}
                  />
                ))}
                <button
                  onClick={handleAddCertification}
                  className="text-xs text-blue-600 hover:underline"
                >
                  + Add Certification
                </button>
              </>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {resume.certifications?.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
              Languages
            </h3>
            {isEditing ? (
              <>
                {resume.languages?.map((lang, index) => (
                  <input
                    key={index}
                    type="text"
                    value={lang}
                    onChange={(e) => handleLanguageChange(index, e.target.value)}
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs"
                  />
                ))}
                <button
                  onClick={handleAddLanguage}
                  className="text-xs text-blue-600 hover:underline"
                >
                  + Add Language
                </button>
              </>
            ) : (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {resume.languages?.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    );
  }
);

const Template6 = () => {
  const [resume, setResume] = useState(initialResume6);
  const [tempResume, setTempResume] = useState(initialResume6);
  const [isEditing, setIsEditing] = useState(false);
  const componentRef = useRef(null);

  // Basic field change
  const handleChange = (field, value) => {
    setTempResume({ ...tempResume, [field]: value });
  };

  // Experience
  const handleAddExperience = () => {
    const newExp = {
      role: "",
      company: "",
      duration: "",
      location: "",
      details: [""]
    };
    setTempResume((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExp],
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    const newExp = [...tempResume.experiences];
    newExp[index] = { ...newExp[index], [field]: value };
    setTempResume({ ...tempResume, experiences: newExp });
  };
  const handleAddDetail = (expIndex) => {
    const newExp = [...tempResume.experiences];
    newExp[expIndex].details.push("");
    setTempResume({ ...tempResume, experiences: newExp });
  };
  const handleDetailChange = (expIndex, detailIndex, value) => {
    const newExp = [...tempResume.experiences];
    const details = [...newExp[expIndex].details];
    details[detailIndex] = value;
    newExp[expIndex].details = details;
    setTempResume({ ...tempResume, experiences: newExp });
  };

  // Education
  const handleAddEducation = () => {
    const newEdu = {
      degree: "",
      school: "",
      location: "",
      graduation: ""
    };
    setTempResume((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));
  };
  const handleEducationChange = (index, field, value) => {
    const newEdu = [...tempResume.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setTempResume({ ...tempResume, education: newEdu });
  };

  // Certifications
  const handleAddCertification = () => {
    const updated = [...(tempResume.certifications || []), ""];
    setTempResume({ ...tempResume, certifications: updated });
  };
  const handleCertificationChange = (index, value) => {
    const newCert = [...(tempResume.certifications || [])];
    newCert[index] = value;
    setTempResume({ ...tempResume, certifications: newCert });
  };

  // Achievements
  const handleAddAchievement = () => {
    const updated = [...(tempResume.achievements || []), ""];
    setTempResume({ ...tempResume, achievements: updated });
  };
  const handleAchievementChange = (index, value) => {
    const newAch = [...(tempResume.achievements || [])];
    newAch[index] = value;
    setTempResume({ ...tempResume, achievements: newAch });
  };

  // Languages
  const handleAddLanguage = () => {
    const updated = [...(tempResume.languages || []), ""];
    setTempResume({ ...tempResume, languages: updated });
  };
  const handleLanguageChange = (index, value) => {
    const newLang = [...(tempResume.languages || [])];
    newLang[index] = value;
    setTempResume({ ...tempResume, languages: newLang });
  };

  // Save/Cancel
  const handleSave = () => {
    setResume(tempResume);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setTempResume(resume);
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      {/* Control bar */}
      <div className="flex justify-end gap-2 mb-4">
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Download PDF
            </button>
          )}
          content={() => componentRef.current}
          pageStyle="@page { size: A4; margin: 20mm; } body { -webkit-print-color-adjust: exact; }"
        />
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>

      {/* Resume Content */}
      <ResumeLayoutTemplate6
        ref={componentRef}
        resume={isEditing ? tempResume : resume}
        isEditing={isEditing}
        handleChange={handleChange}
        handleAddExperience={handleAddExperience}
        handleAddDetail={handleAddDetail}
        handleAddEducation={handleAddEducation}
        handleAddCertification={handleAddCertification}
        handleAddAchievement={handleAddAchievement}
        handleAddLanguage={handleAddLanguage}
        handleExperienceChange={handleExperienceChange}
        handleDetailChange={handleDetailChange}
        handleEducationChange={handleEducationChange}
        handleCertificationChange={handleCertificationChange}
        handleAchievementChange={handleAchievementChange}
        handleLanguageChange={handleLanguageChange}
      />
    </div>
  );
};

export default Template6;
