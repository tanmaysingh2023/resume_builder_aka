import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

// Define initial resume data for Template3
const initialResume3 = {
  name: "Mason Turner",
  title: "Experienced Sales Professional | B2B | Networking",
  phone: "+1 (234) 555-1234",
  email: "help@help.com",
  linkedin: "https://linkedin.com/in/some-profile",
  summary:
    "Accomplished salesperson with a proven track record in B2B environments, consistently driving sales growth and building lasting client relationships. Proficient in consultative selling, strategic planning, and sales management.",
  experiences: [
    {
      role: "Senior Account Executive",
      company: "Tech Innovations, Denver, CO",
      duration: "September 2019 – Present",
      details: [
        "Orchestrated multi-million-dollar solution sales by analyzing customer needs, resulting in a 25% revenue increase.",
        "Managed a team of 5, providing training and performance coaching.",
        "Negotiated and closed large, complex transactions with Fortune 500 clients.",
        "Maintained and expanded key accounts, consistently surpassing annual quotas by 30%."
      ]
    },
    {
      role: "Account Manager",
      company: "Global Logistics Solutions, Los Angeles, CA",
      duration: "February 2015 – August 2019",
      details: [
        "Achieved 130% of sales quota in the first year.",
        "Expanded the client base by developing a robust pipeline in the logistics sector.",
        "Collaborated with cross-functional teams to streamline client onboarding processes.",
        "Identified cross-selling and upselling opportunities that drove revenue growth."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Business Administration",
      school: "University of Colorado, Denver, CO",
      graduation: "May 2014"
    }
  ],
  achievements: [
    "Team Leadership: Led a cross-functional sales program resulting in a sustained 10% year-on-year increase in business.",
    "Strategic Account Growth: Expanded key account portfolios by 40% within 12 months."
  ]
};

const ResumeLayoutTemplate3 = React.forwardRef(
  (
    {
      resume,
      isEditing,
      handleChange,
      handleEducationChange,
      handleExperienceChange,
      handleDetailChange,
      handleAchievementChange,
      handleAddExperience,
      handleAddDetail,
      handleAddEducation,
      handleAddAchievement,
    },
    ref
  ) => {
    // Use a distinct style for edit mode:
    const containerClasses = isEditing
      ? "max-w-3xl mx-auto my-10 p-8 bg-yellow-50 border-2 border-yellow-400 shadow-md rounded-lg"
      : "max-w-3xl mx-auto my-10 p-8 bg-white border border-gray-300 shadow-sm rounded-lg";

    return (
      <div ref={ref} className={containerClasses}>
        {/* Prominent Edit Mode Banner */}
        {isEditing && (
          <div className="mb-6 p-4 bg-yellow-200 text-yellow-800 rounded text-base font-bold text-center">
            EDIT MODE: Please make changes and click Save or Cancel.
          </div>
        )}

        {/* Header */}
        {isEditing ? (
          <header className="text-center mb-8">
            <input
              type="text"
              value={resume.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="text-3xl font-bold text-gray-800 w-full p-3 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              value={resume.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="text-lg text-gray-600 w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <input
                type="text"
                value={resume.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Phone"
              />
              <input
                type="text"
                value={resume.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Email"
              />
              <input
                type="text"
                value={resume.linkedin}
                onChange={(e) => handleChange("linkedin", e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="LinkedIn"
              />
            </div>
          </header>
        ) : (
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">{resume.name}</h1>
            <p className="text-lg text-gray-600">{resume.title}</p>
            <p className="text-sm text-gray-500 mt-2">
              {resume.phone} | {resume.email} | {resume.linkedin}
            </p>
          </header>
        )}

        {/* Summary */}
        {isEditing ? (
          <section className="mb-6">
            <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
              SUMMARY
            </h2>
            <textarea
              value={resume.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
              rows={4}
            />
          </section>
        ) : (
          <section className="mb-6">
            <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
              SUMMARY
            </h2>
            <p className="text-sm text-gray-700">{resume.summary}</p>
          </section>
        )}

        {/* Experience Timeline */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
            EXPERIENCE
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            {resume.experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex relative">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold absolute left-0 -mt-1">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-12 w-full">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) =>
                          handleExperienceChange(index, "role", e.target.value)
                        }
                        className="text-xl font-bold w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(index, "company", e.target.value)
                        }
                        className="text-sm text-gray-500 w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) =>
                          handleExperienceChange(index, "duration", e.target.value)
                        }
                        className="text-sm italic text-gray-500 w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      {exp.details.map((detail, dIndex) => (
                        <textarea
                          key={dIndex}
                          value={detail}
                          onChange={(e) =>
                            handleDetailChange(index, dIndex, e.target.value)
                          }
                          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          rows={2}
                        ></textarea>
                      ))}
                      <button
                        onClick={() => handleAddDetail(index)}
                        className="text-sm text-yellow-600 hover:underline"
                      >
                        + Add Detail
                      </button>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-sm text-gray-500">{exp.company}</p>
                      <p className="text-sm italic text-gray-500">{exp.duration}</p>
                      <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
                        {exp.details.map((detail, dIndex) => (
                          <li key={dIndex}>{detail}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <button
              onClick={handleAddExperience}
              className="text-sm text-yellow-600 hover:underline"
            >
              + Add Experience
            </button>
          )}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
            EDUCATION
          </h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4 border-l-4 border-yellow-300 pl-4">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) =>
                      handleEducationChange(index, "school", e.target.value)
                    }
                    className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="School"
                  />
                  <input
                    type="text"
                    value={edu.graduation}
                    onChange={(e) =>
                      handleEducationChange(index, "graduation", e.target.value)
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    placeholder="Graduation"
                  />
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-700">
                    <strong>{edu.degree}</strong> – {edu.school}
                  </p>
                  <p className="text-sm text-gray-500">
                    Graduated: {edu.graduation}
                  </p>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <button
              onClick={handleAddEducation}
              className="text-sm text-yellow-600 hover:underline"
            >
              + Add Education
            </button>
          )}
        </section>

        {/* Key Achievements */}
        <section>
          <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
            KEY ACHIEVEMENTS
          </h2>
          {isEditing ? (
            <>
              {resume.achievements.map((ach, index) => (
                <textarea
                  key={index}
                  value={ach}
                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                  className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  rows={2}
                  placeholder="Achievement"
                ></textarea>
              ))}
              <button
                onClick={handleAddAchievement}
                className="text-sm text-yellow-600 hover:underline"
              >
                + Add Achievement
              </button>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resume.achievements.map((ach, index) => (
                <div key={index} className="border border-gray-200 rounded p-4">
                  <p className="text-sm text-gray-700">{ach}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }
);

const Template3 = () => {
  const [resume, setResume] = useState(initialResume3);
  const [isEditing, setIsEditing] = useState(false);
  const [tempResume, setTempResume] = useState(initialResume3);
  const componentRef = useRef(null);

  // -------------- Handlers --------------
  const handleChange = (field, value) => {
    setTempResume({ ...tempResume, [field]: value });
  };

  const handleEducationChange = (index, field, value) => {
    const newEdu = [...tempResume.education];
    newEdu[index] = { ...newEdu[index], [field]: value };
    setTempResume({ ...tempResume, education: newEdu });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExp = [...tempResume.experiences];
    newExp[index] = { ...newExp[index], [field]: value };
    setTempResume({ ...tempResume, experiences: newExp });
  };

  const handleDetailChange = (expIndex, detailIndex, value) => {
    const newExp = [...tempResume.experiences];
    const newDetails = [...newExp[expIndex].details];
    newDetails[detailIndex] = value;
    newExp[expIndex].details = newDetails;
    setTempResume({ ...tempResume, experiences: newExp });
  };

  const handleAchievementChange = (index, value) => {
    const newAch = [...tempResume.achievements];
    newAch[index] = value;
    setTempResume({ ...tempResume, achievements: newAch });
  };

  // -------------- Add Section Items --------------
  const handleAddExperience = () => {
    const newExp = { role: "", company: "", duration: "", details: [""] };
    setTempResume((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExp],
    }));
  };

  const handleAddDetail = (expIndex) => {
    const newExp = [...tempResume.experiences];
    newExp[expIndex].details.push("");
    setTempResume({ ...tempResume, experiences: newExp });
  };

  const handleAddEducation = () => {
    const newEdu = { degree: "", school: "", graduation: "" };
    setTempResume((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));
  };

  const handleAddAchievement = () => {
    setTempResume((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };

  // -------------- Save/Cancel/Editing --------------
  const handleSave = () => {
    setResume(tempResume);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempResume(resume);
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
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
      <ResumeLayoutTemplate3
        ref={componentRef}
        resume={isEditing ? tempResume : resume}
        isEditing={isEditing}
        handleChange={handleChange}
        handleEducationChange={handleEducationChange}
        handleExperienceChange={handleExperienceChange}
        handleDetailChange={handleDetailChange}
        handleAchievementChange={handleAchievementChange}
        handleAddExperience={handleAddExperience}
        handleAddDetail={handleAddDetail}
        handleAddEducation={handleAddEducation}
        handleAddAchievement={handleAddAchievement}
      />
    </div>
  );
};

export default Template3;
