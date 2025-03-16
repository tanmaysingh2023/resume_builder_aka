import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';

// Initial resume data
const initialResume2 = {
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

/** 
 * The main layout component. We switch between two container styles:
 * - View Mode: a clean, white background with a gray border
 * - Edit Mode: a light-blue background, blue border highlight, and an edit banner
 */
const ResumeLayoutTemplate2 = React.forwardRef(
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
    // Container style changes if we're editing
    const containerClasses = isEditing
      ? "max-w-3xl mx-auto my-10 p-8 bg-blue-50 border border-blue-300 shadow-md rounded-lg"
      : "max-w-3xl mx-auto my-10 p-8 bg-white border border-gray-300 shadow-sm rounded-lg";

    return (
      <div ref={ref} className={containerClasses}>
        {/* Small banner to indicate Edit Mode */}
        {isEditing && (
          <div className="mb-6 p-3 bg-blue-100 text-blue-800 rounded text-sm">
            <strong>EDIT MODE:</strong> Make changes below and click <em>Save</em> or <em>Cancel</em>.
          </div>
        )}

        {isEditing ? (
          // ----------------- EDIT MODE -----------------
          <>
            {/* Header: Name, Title, Contact */}
            <header className="text-center mb-8">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Name</label>
                <input
                  type="text"
                  value={resume.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Title</label>
                <input
                  type="text"
                  value={resume.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="mb-2 flex flex-col gap-2 md:flex-row md:gap-4 justify-center">
                <div>
                  <label className="block text-sm font-bold mb-1">Phone</label>
                  <input
                    type="text"
                    value={resume.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Email</label>
                  <input
                    type="text"
                    value={resume.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">LinkedIn</label>
                  <input
                    type="text"
                    value={resume.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </header>

            {/* SUMMARY */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                SUMMARY
              </h2>
              <textarea
                value={resume.summary}
                onChange={(e) => handleChange("summary", e.target.value)}
                className="w-full p-3 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows={4}
              />
            </section>

            {/* EXPERIENCE */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
                EXPERIENCE
              </h2>
              {resume.experiences.map((exp, index) => (
                <div key={index} className="mb-6 border-l-4 border-blue-300 bg-white p-4 rounded shadow-sm">
                  <div className="mb-2">
                    <label className="block text-sm font-bold mb-1">Role</label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) =>
                        handleExperienceChange(index, "role", e.target.value)
                      }
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-bold mb-1">Details</label>
                    {exp.details.map((detail, dIndex) => (
                      <textarea
                        key={dIndex}
                        value={detail}
                        onChange={(e) =>
                          handleDetailChange(index, dIndex, e.target.value)
                        }
                        className="w-full p-2 border rounded mb-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows={2}
                      />
                    ))}
                    <button
                      onClick={() => handleAddDetail(index)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      + Add Detail
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={handleAddExperience}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add Experience
              </button>
            </section>

            {/* EDUCATION */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-4 border-l-4 border-blue-300 bg-white p-4 rounded shadow-sm">
                  <div className="mb-2">
                    <label className="block text-sm font-bold mb-1">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
                      }
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                      className="w-full p-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
              ))}
              <button
                onClick={handleAddEducation}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add Education
              </button>
            </section>

            {/* KEY ACHIEVEMENTS */}
            <section>
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                KEY ACHIEVEMENTS
              </h2>
              {resume.achievements.map((ach, index) => (
                <textarea
                  key={index}
                  value={ach}
                  onChange={(e) => handleAchievementChange(index, e.target.value)}
                  className="w-full p-2 border rounded mb-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  rows={2}
                />
              ))}
              <button
                onClick={handleAddAchievement}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add Achievement
              </button>
            </section>
          </>
        ) : (
          // ----------------- VIEW MODE -----------------
          <>
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">{resume.name}</h1>
              <p className="text-sm text-gray-600 mt-1">{resume.title}</p>
              <p className="text-sm text-gray-500 mt-2">
                {resume.phone} | {resume.email} | {resume.linkedin}
              </p>
            </header>

            {/* SUMMARY */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                SUMMARY
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {resume.summary}
              </p>
            </section>

            {/* EXPERIENCE */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
                EXPERIENCE
              </h2>
              {resume.experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-sm italic text-gray-500">{exp.duration}</p>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* EDUCATION */}
            <section className="mb-6">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-2">
                EDUCATION
              </h2>
              {resume.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <p className="text-sm text-gray-700">
                    <strong>{edu.degree}</strong> – {edu.school}
                  </p>
                  <p className="text-sm text-gray-500">
                    Graduated: {edu.graduation}
                  </p>
                </div>
              ))}
            </section>

            {/* KEY ACHIEVEMENTS */}
            <section>
              <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4">
                KEY ACHIEVEMENTS
              </h2>
              {/* Two-column grid for achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resume.achievements.map((ach, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded p-4"
                  >
                    <p className="text-sm text-gray-700">{ach}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    );
  }
);

const Template2 = () => {
  const [resume, setResume] = useState(initialResume2);
  const [isEditing, setIsEditing] = useState(false);
  const [tempResume, setTempResume] = useState(initialResume2);
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
      {/* Top bar with Edit/Download/Save/Cancel */}
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
      <ResumeLayoutTemplate2
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

export default Template2;
