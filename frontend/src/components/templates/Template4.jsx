import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

// Initial data structure for Template4
const initialResume4 = {
  name: "Jason Reed",
  title: "Vice President, Manufacturing | Strategic Leadership | Process Optimization",
  phone: "+1 (234) 555-7890",
  email: "jason.reed@enhancv.com",
  location: "Seattle, WA",
  summary:
    "With over 15 years of leadership experience in manufacturing, I excel in streamlining processes and driving revenue growth. Adept at implementing data-driven solutions, building strong cross-functional teams, and leading complex projects that significantly improve operational efficiencies and profitability.",
  achievements: [
    "20% Production Efficiency Increase: Oversaw strategic process improvements that reduced downtime and improved efficiency.",
    "30% Revenue Growth from Key Partners: Negotiated and secured new B2B partnerships, boosting revenue by 30%.",
    "40% Market Share Growth: Expanded into emerging markets and developed new product lines."
  ],
  certifications: [
    "Lean Manufacturing Certified",
    "Six Sigma Green Belt",
    "Project Management Professional (PMP)"
  ],
  languages: [
    "English (Native)",
    "Spanish (Professional)",
    "Mandarin (Conversational)"
  ],
  experience: [
    {
      role: "Vice President, Manufacturing",
      company: "ACG Biologics",
      location: "Seattle, WA",
      duration: "01/2019 – Present",
      details: [
        "Led strategic planning and execution of manufacturing processes, resulting in a 20% increase in production efficiency.",
        "Implemented a data-driven KPI system that reduced operational costs by 15%.",
        "Collaborated with cross-functional teams to improve safety standards and compliance."
      ]
    },
    {
      role: "Director of Operations",
      company: "Mercury Manufacturing",
      location: "Denver, CO",
      duration: "06/2014 – 12/2018",
      details: [
        "Oversaw 5 production plants, optimizing supply chain and improving overall efficiency by 25%.",
        "Developed and implemented Lean strategies, reducing waste and cost across multiple production lines.",
        "Managed a team of 200+ staff, providing leadership and professional development."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Chemical Engineering",
      school: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      graduation: "01/2005 – 01/2007"
    },
    {
      degree: "Bachelor of Science in Chemical Engineering",
      school: "University of Washington",
      location: "Seattle, WA",
      graduation: "09/2000 – 05/2004"
    }
  ]
};

// The main layout component with forwardRef so react-to-print can capture it
const ResumeLayoutTemplate4 = React.forwardRef(
  (
    {
      resume,
      isEditing,
      // Handlers
      handleChange,
      handleAddAchievement,
      handleAddCertification,
      handleAddLanguage,
      handleAddExperience,
      handleAddDetail,
      handleAddEducation,
      handleAchievementChange,
      handleCertificationChange,
      handleLanguageChange,
      handleExperienceChange,
      handleDetailChange,
      handleEducationChange
    },
    ref
  ) => {
    // Container style changes if we're in edit mode
    const containerClass = isEditing
      ? "max-w-5xl mx-auto my-10 bg-green-50 border border-green-300 p-8 shadow-md rounded-lg"
      : "max-w-5xl mx-auto my-10 bg-white border border-gray-300 p-8 shadow-sm rounded-lg";

    return (
      <div ref={ref} className={containerClass}>
        {/* Edit mode banner */}
        {isEditing && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 text-base font-bold text-center rounded">
            EDIT MODE: Update your resume and click Save or Cancel.
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <aside className="md:w-1/3 bg-gradient-to-br from-green-600 to-green-500 text-white p-8">
            {/* Achievements */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                KEY ACHIEVEMENTS
              </h2>
              {isEditing ? (
                <>
                  {resume.achievements.map((ach, index) => (
                    <textarea
                      key={index}
                      value={ach}
                      onChange={(e) => handleAchievementChange(index, e.target.value)}
                      className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                      rows={2}
                    />
                  ))}
                  <button
                    onClick={handleAddAchievement}
                    className="text-sm text-green-600 hover:underline"
                  >
                    + Add Achievement
                  </button>
                </>
              ) : (
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  {resume.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* Certifications */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                CERTIFICATION
              </h2>
              {isEditing ? (
                <>
                  {resume.certifications?.map((cert, index) => (
                    <textarea
                      key={index}
                      value={cert}
                      onChange={(e) => handleCertificationChange(index, e.target.value)}
                      className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                      rows={2}
                    />
                  ))}
                  <button
                    onClick={handleAddCertification}
                    className="text-sm text-green-600 hover:underline"
                  >
                    + Add Certification
                  </button>
                </>
              ) : (
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  {resume.certifications?.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* Languages */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                LANGUAGES
              </h2>
              {isEditing ? (
                <>
                  {resume.languages?.map((lang, index) => (
                    <input
                      key={index}
                      type="text"
                      value={lang}
                      onChange={(e) => handleLanguageChange(index, e.target.value)}
                      className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                    />
                  ))}
                  <button
                    onClick={handleAddLanguage}
                    className="text-sm text-green-600 hover:underline"
                  >
                    + Add Language
                  </button>
                </>
              ) : (
                <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {resume.languages?.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              )}
            </section>
          </aside>

          {/* Right Main Content */}
          <main className="md:w-2/3">
            {/* Header Info (Name, Title, Contact) */}
            {isEditing ? (
              <div className="text-center mb-6">
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">Name</label>
                  <input
                    type="text"
                    value={resume.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-lg font-bold text-gray-800"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-bold mb-1">Title</label>
                  <input
                    type="text"
                    value={resume.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-600"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <div>
                    <label className="block text-sm font-bold mb-1">Phone</label>
                    <input
                      type="text"
                      value={resume.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Email</label>
                    <input
                      type="text"
                      value={resume.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">Location</label>
                    <input
                      type="text"
                      value={resume.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-gray-800">{resume.name}</h1>
                <p className="text-sm text-gray-600 mt-1">{resume.title}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {resume.phone} | {resume.email} | {resume.location}
                </p>
              </div>
            )}

            {/* SUMMARY */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                SUMMARY
              </h2>
              {isEditing ? (
                <textarea
                  value={resume.summary}
                  onChange={(e) => handleChange("summary", e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-700"
                  rows={4}
                />
              ) : (
                <p className="text-sm text-gray-700 leading-relaxed">{resume.summary}</p>
              )}
            </section>

            {/* EXPERIENCE */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
                EXPERIENCE
              </h2>
              {resume.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  {isEditing ? (
                    <>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Role</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) =>
                            handleExperienceChange(index, "role", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-semibold text-gray-800"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Company</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            handleExperienceChange(index, "company", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-600"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Location</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) =>
                            handleExperienceChange(index, "location", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-600"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Duration</label>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) =>
                            handleExperienceChange(index, "duration", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm italic text-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold mb-1">Details</label>
                        {exp.details.map((detail, dIndex) => (
                          <textarea
                            key={dIndex}
                            value={detail}
                            onChange={(e) =>
                              handleDetailChange(index, dIndex, e.target.value)
                            }
                            className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                            rows={2}
                          />
                        ))}
                        <button
                          onClick={() => handleAddDetail(index)}
                          className="text-sm text-green-600 hover:underline"
                        >
                          + Add Detail
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-sm font-semibold text-gray-800">{exp.role}</h3>
                      <p className="text-sm text-gray-600">
                        {exp.company} | {exp.location}
                      </p>
                      <p className="text-sm italic text-gray-500">{exp.duration}</p>
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
                  className="text-sm text-green-600 hover:underline"
                >
                  + Add Experience
                </button>
              )}
            </section>

            {/* EDUCATION */}
            <section>
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) =>
                            handleEducationChange(index, "degree", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm font-semibold text-gray-800"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">School</label>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) =>
                            handleEducationChange(index, "school", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-600"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Location</label>
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) =>
                            handleEducationChange(index, "location", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm text-gray-600"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-bold mb-1">Graduation</label>
                        <input
                          type="text"
                          value={edu.graduation}
                          onChange={(e) =>
                            handleEducationChange(index, "graduation", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-300 text-sm italic text-gray-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-800 font-semibold">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-gray-600">
                        {edu.school} | {edu.location}
                      </p>
                      <p className="text-sm italic text-gray-500">
                        {edu.graduation}
                      </p>
                    </>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={handleAddEducation}
                  className="text-sm text-green-600 hover:underline"
                >
                  + Add Education
                </button>
              )}
            </section>
          </main>
        </div>
      </div>
    );
  }
);

const Template4 = () => {
  const [resume, setResume] = useState(initialResume4);
  const [tempResume, setTempResume] = useState(initialResume4);
  const [isEditing, setIsEditing] = useState(false);
  const componentRef = useRef(null);

  // Generic field change
  const handleChange = (field, value) => {
    setTempResume({ ...tempResume, [field]: value });
  };

  // Achievements
  const handleAddAchievement = () => {
    setTempResume((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };
  const handleAchievementChange = (index, value) => {
    const newAchievements = [...tempResume.achievements];
    newAchievements[index] = value;
    setTempResume({ ...tempResume, achievements: newAchievements });
  };

  // Certifications
  const handleAddCertification = () => {
    const updated = [...(tempResume.certifications || []), ""];
    setTempResume({ ...tempResume, certifications: updated });
  };
  const handleCertificationChange = (index, value) => {
    const newCerts = [...(tempResume.certifications || [])];
    newCerts[index] = value;
    setTempResume({ ...tempResume, certifications: newCerts });
  };

  // Languages
  const handleAddLanguage = () => {
    const updated = [...(tempResume.languages || []), ""];
    setTempResume({ ...tempResume, languages: updated });
  };
  const handleLanguageChange = (index, value) => {
    const newLangs = [...(tempResume.languages || [])];
    newLangs[index] = value;
    setTempResume({ ...tempResume, languages: newLangs });
  };

  // Experience
  const handleAddExperience = () => {
    const newExp = {
      role: "",
      company: "",
      location: "",
      duration: "",
      details: [""],
    };
    setTempResume((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    const newExp = [...tempResume.experience];
    newExp[index] = { ...newExp[index], [field]: value };
    setTempResume({ ...tempResume, experience: newExp });
  };
  const handleAddDetail = (expIndex) => {
    const newExp = [...tempResume.experience];
    newExp[expIndex].details.push("");
    setTempResume({ ...tempResume, experience: newExp });
  };
  const handleDetailChange = (expIndex, detailIndex, value) => {
    const newExp = [...tempResume.experience];
    const details = [...newExp[expIndex].details];
    details[detailIndex] = value;
    newExp[expIndex].details = details;
    setTempResume({ ...tempResume, experience: newExp });
  };

  // Education
  const handleAddEducation = () => {
    const newEdu = {
      degree: "",
      school: "",
      location: "",
      graduation: "",
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
      <ResumeLayoutTemplate4
        ref={componentRef}
        resume={isEditing ? tempResume : resume}
        isEditing={isEditing}
        // Handlers
        handleChange={handleChange}
        handleAddAchievement={handleAddAchievement}
        handleAddCertification={handleAddCertification}
        handleAddLanguage={handleAddLanguage}
        handleAddExperience={handleAddExperience}
        handleAddDetail={handleAddDetail}
        handleAddEducation={handleAddEducation}
        handleAchievementChange={handleAchievementChange}
        handleCertificationChange={handleCertificationChange}
        handleLanguageChange={handleLanguageChange}
        handleExperienceChange={handleExperienceChange}
        handleDetailChange={handleDetailChange}
        handleEducationChange={handleEducationChange}
      />
    </div>
  );
};

export default Template4;
