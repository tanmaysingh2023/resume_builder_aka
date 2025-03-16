import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

// Initial resume data for Template5
const initialResume5 = {
  photo: "https://via.placeholder.com/150", // Default profile image
  name: "Ellen Johnson",
  title: "Digital Marketing Manager | Growth Hacking | Data Analysis",
  phone: "+1 (234) 555-1234",
  email: "ellen.johnson@example.com",
  location: "San Francisco, California",
  experiences: [
    {
      role: "Senior Digital Marketing Specialist",
      company: "Tech Innovative",
      duration: "01/2022 – Present",
      location: "San Francisco, CA",
      details: [
        "Led a cross-channel campaign generating 200% growth in lead acquisition.",
        "Managed SEO strategy across Google and TikTok, increasing organic traffic by 30%.",
        "Analyzed $300k+ monthly ad budget for paid channels, improving ROAS by 20%."
      ]
    },
    {
      role: "Digital Marketing Manager",
      company: "Growth Lab",
      duration: "08/2020 – 12/2021",
      location: "San Francisco, CA",
      details: [
        "Launched targeted social ads that boosted app downloads by 35%.",
        "Orchestrated multi-channel email campaigns, achieving a 15% CTR improvement.",
        "Implemented conversion tracking via Google Analytics, enabling data-driven optimization."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration",
      school: "San Francisco State University",
      location: "San Francisco, CA",
      graduation: "08/2017 – 05/2021"
    }
  ],
  summary:
    "Motivated Digital Marketing Manager with over 3 years of experience in brand building, social media strategy, and analytics. Skilled at developing data-driven campaigns, optimizing ROI, and driving growth through creative solutions. Passionate about emerging platforms and consumer behavior.",
  achievements: [
    "Increased website traffic by 40% through SEO & content strategy.",
    "Reduced CPC by 25% via advanced audience targeting.",
    "Implemented A/B testing for landing pages, boosting conversion rates by 15%."
  ],
  certifications: [
    "Google Analytics Individual Qualification",
    "HubSpot Inbound Marketing",
    "Specialized in retargeting & remarketing strategies"
  ],
  languages: [
    "English (Native)",
    "Spanish (Advanced)",
    "Mandarin (Conversational)"
  ]
};

const ResumeLayoutTemplate5 = React.forwardRef(
  (
    {
      resume,
      isEditing,
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
      handleEducationChange,
    },
    ref
  ) => {
    // Use a subtle background for view mode and a highlighted background in edit mode.
    const containerClasses = isEditing
      ? "max-w-6xl mx-auto my-10 p-8 bg-gray-50 border border-gray-300 shadow-md rounded-lg"
      : "max-w-6xl mx-auto my-10 p-8 bg-white border border-gray-200 shadow-sm rounded-lg";

    return (
      <div ref={ref} className={containerClasses}>
        {/* Header Banner with Profile Image */}
        <header className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-lg text-center text-white mb-8">
          {isEditing ? (
            <div className="flex flex-col items-center">
              <label className="text-xs uppercase tracking-wider mb-1">Profile Photo URL</label>
              <input
                type="text"
                value={resume.photo}
                onChange={(e) => handleChange("photo", e.target.value)}
                className="w-1/2 p-2 border rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-3"
                placeholder="Enter image URL"
              />
              {resume.photo && (
                <img
                  src={resume.photo}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full border-2 border-white mb-2"
                />
              )}
              <input
                type="text"
                value={resume.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xl font-bold text-white bg-transparent placeholder-white mb-2"
                placeholder="Your Name"
              />
              <input
                type="text"
                value={resume.title}
                onChange={(e) => handleChange("title", e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-white bg-transparent placeholder-white"
                placeholder="Your Title"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {resume.photo && (
                <img
                  src={resume.photo}
                  alt="Profile"
                  className="w-24 h-24 object-cover rounded-full border-2 border-white mb-2"
                />
              )}
              <h1 className="text-2xl font-bold">{resume.name}</h1>
              <p className="text-sm">{resume.title}</p>
              <p className="text-xs mt-1">
                {resume.phone} | {resume.email} | {resume.location}
              </p>
            </div>
          )}
        </header>

        {/* Main Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Experience, Education */}
          <div className="md:w-2/3">
            {/* EXPERIENCE */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-3">
                EXPERIENCE
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
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs font-semibold text-gray-800"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            handleExperienceChange(index, "company", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs text-gray-600"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 mb-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                            Duration
                          </label>
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) =>
                              handleExperienceChange(index, "duration", e.target.value)
                            }
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs italic text-gray-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                            Location
                          </label>
                          <input
                            type="text"
                            value={exp.location}
                            onChange={(e) =>
                              handleExperienceChange(index, "location", e.target.value)
                            }
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs text-gray-500"
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
                          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs"
                          rows={2}
                        ></textarea>
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
                      <h3 className="text-xs font-semibold text-gray-800">{exp.role}</h3>
                      <p className="text-xs text-gray-600">
                        {exp.company} | {exp.duration} | {exp.location}
                      </p>
                      <ul className="list-disc list-inside mt-2 text-xs text-gray-700 space-y-1">
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

            {/* EDUCATION */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <div className="mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Degree
                        </label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) =>
                            handleEducationChange(index, "degree", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs font-semibold text-gray-800"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          School
                        </label>
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) =>
                            handleEducationChange(index, "school", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs text-gray-600"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) =>
                            handleEducationChange(index, "location", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs text-gray-500"
                        />
                      </div>
                      <div className="mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider mb-1">
                          Graduation
                        </label>
                        <input
                          type="text"
                          value={edu.graduation}
                          onChange={(e) =>
                            handleEducationChange(index, "graduation", e.target.value)
                          }
                          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs italic text-gray-500"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-xs text-gray-800 font-semibold">{edu.degree}</p>
                      <p className="text-xs text-gray-600">
                        {edu.school} | {edu.location}
                      </p>
                      <p className="text-xs italic text-gray-500">{edu.graduation}</p>
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
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-200"></div>

          {/* RIGHT COLUMN */}
          <div className="md:w-1/3">
            {/* SUMMARY */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
                SUMMARY
              </h2>
              {isEditing ? (
                <textarea
                  value={resume.summary}
                  onChange={(e) => handleChange("summary", e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-xs text-gray-700"
                  rows={6}
                />
              ) : (
                <p className="text-xs text-gray-700 leading-relaxed">{resume.summary}</p>
              )}
            </section>

            {/* KEY ACHIEVEMENTS */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
                KEY ACHIEVEMENTS
              </h2>
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
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                  {resume.achievements.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* CERTIFICATION */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
                CERTIFICATION
              </h2>
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
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                  {resume.certifications?.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              )}
            </section>

            {/* LANGUAGES */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase mb-2">
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
                <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
                  {resume.languages?.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
);

const Template5WithImage = () => {
  const [resume, setResume] = useState(initialResume5);
  const [tempResume, setTempResume] = useState(initialResume5);
  const [isEditing, setIsEditing] = useState(false);
  const componentRef = useRef(null);

  // Basic field change
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
    const newAch = [...tempResume.achievements];
    newAch[index] = value;
    setTempResume({ ...tempResume, achievements: newAch });
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

  // Save / Cancel
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
      {/* Top control bar */}
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
      <ResumeLayoutTemplate5
        ref={componentRef}
        resume={isEditing ? tempResume : resume}
        isEditing={isEditing}
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

export default Template5WithImage;
