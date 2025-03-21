import React, { useState, useRef, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
// Removed html2canvas and jsPDF imports

// Initial resume data for Template1
const initialResume = {
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

const ResumeLayout = React.forwardRef((props, ref) => {
  const {
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
  } = props;

  return (
    <div
      ref={ref}
      className="mx-auto max-w-xl p-6 text-gray-800"
      style={{ backgroundColor: '#ffffff', color: '#000000' }}
    >
      {isEditing ? (
        <>
          {/* Editable Header */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              value={resume.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              value={resume.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="text"
              value={resume.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="text"
              value={resume.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">LinkedIn</label>
            <input
              type="text"
              value={resume.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Editable Summary */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Summary</label>
            <textarea
              value={resume.summary}
              onChange={(e) => handleChange("summary", e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>
          {/* Editable Experience */}
          <h2 className="mt-6 text-lg font-semibold border-b pb-1">Experience</h2>
          {resume.experiences.map((exp, index) => (
            <div key={index} className="mt-4 border p-4 rounded">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Role</label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) =>
                    handleExperienceChange(index, "role", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    handleExperienceChange(index, "company", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Duration</label>
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) =>
                    handleExperienceChange(index, "duration", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Details</label>
                {exp.details.map((detail, dIndex) => (
                  <textarea
                    key={dIndex}
                    value={detail}
                    onChange={(e) =>
                      handleDetailChange(index, dIndex, e.target.value)
                    }
                    className="w-full p-2 border rounded mb-2"
                    rows="2"
                  />
                ))}
                <button
                  onClick={() => handleAddDetail(index)}
                  className="text-sm text-blue-500 hover:underline"
                >
                  + Add Detail
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleAddExperience}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            + Add Experience
          </button>
          {/* Editable Education */}
          <h2 className="mt-6 text-lg font-semibold border-b pb-1">Education</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4 border p-4 rounded">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">School</label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    handleEducationChange(index, "school", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Graduation</label>
                <input
                  type="text"
                  value={edu.graduation}
                  onChange={(e) =>
                    handleEducationChange(index, "graduation", e.target.value)
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          ))}
          <button
            onClick={handleAddEducation}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            + Add Education
          </button>
          {/* Editable Key Achievements */}
          <h2 className="mt-6 text-lg font-semibold border-b pb-1">
            Key Achievements
          </h2>
          {resume.achievements.map((ach, index) => (
            <textarea
              key={index}
              value={ach}
              onChange={(e) => handleAchievementChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
              rows="2"
            />
          ))}
          <button
            onClick={handleAddAchievement}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            + Add Achievement
          </button>
        </>
      ) : (
        <>
          {/* View Mode */}
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-1">{resume.name}</h1>
            <p className="text-sm text-gray-600">{resume.title}</p>
            <p className="text-sm text-gray-500 mt-1">
              {resume.phone} |{" "}
              <a
                href={`mailto:${resume.email}`}
                className="text-blue-500 hover:underline"
              >
                {resume.email}
              </a>{" "}
              |{" "}
              <a
                href={resume.linkedin}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resume.linkedin}
              </a>
            </p>
          </header>
          <section>
            <h2 className="mt-6 text-lg font-semibold border-b pb-1">
              Summary
            </h2>
            <p className="mt-2 text-sm leading-relaxed">{resume.summary}</p>
          </section>
          <section>
            <h2 className="mt-6 text-lg font-semibold border-b pb-1">
              Experience
            </h2>
            {resume.experiences.map((exp, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-500 italic">{exp.duration}</p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  {exp.details.map((detail, dIndex) => (
                    <li key={dIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h2 className="mt-6 text-lg font-semibold border-b pb-1">
              Education
            </h2>
            {resume.education.map((edu, index) => (
              <div key={index} className="mt-2">
                <p className="text-sm">
                  <span className="font-bold">{edu.degree}</span> - {edu.school}
                </p>
                <p className="text-gray-500">Graduated: {edu.graduation}</p>
              </div>
            ))}
          </section>
          <section>
            <h2 className="mt-6 text-lg font-semibold border-b pb-1">
              Key Achievements
            </h2>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              {resume.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
});

const Template1 = () => {
  const [user, setUser] = useState(null);
  const [resume, setResume] = useState(initialResume);
  const [isEditing, setIsEditing] = useState(false);
  const [tempResume, setTempResume] = useState(initialResume);
  const componentRef = useRef(null);

  // Retrieve user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/home");
      return;
    }
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);
  }, []);

  // Modified save handler: Instead of generating PDF client-side, simply send resume data along with user ID to the backend
  const handleSave = async () => {
    setResume(tempResume);
    setIsEditing(false);
    try {
      const storedUser = localStorage.getItem("user");
      let userId = "";
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        userId = parsedUser._id;
      }

      const payload = {
        userId,
        templateId: "temp1", // Modify if necessary based on the template
        data: tempResume,
        // Do not send PDF data; the server will generate the PDF
      };

      const response = await fetch('/api/aka_resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const savedAkaResume = await response.json();
      console.log("AkaResume saved:", savedAkaResume);
    } catch (error) {
      console.error("Error saving AkaResume:", error);
    }
  };

  const handleCancel = () => {
    setTempResume(resume);
    setIsEditing(false);
  };

  // Other handlers (handleChange, handleEducationChange, etc.) remain unchanged
  const handleChange = (field, value) => {
    setTempResume({ ...tempResume, [field]: value });
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...tempResume.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setTempResume({ ...tempResume, education: newEducation });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperiences = [...tempResume.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setTempResume({ ...tempResume, experiences: newExperiences });
  };

  const handleDetailChange = (expIndex, detailIndex, value) => {
    const newExperiences = [...tempResume.experiences];
    const details = [...newExperiences[expIndex].details];
    details[detailIndex] = value;
    newExperiences[expIndex].details = details;
    setTempResume({ ...tempResume, experiences: newExperiences });
  };

  const handleAchievementChange = (index, value) => {
    const newAchievements = [...tempResume.achievements];
    newAchievements[index] = value;
    setTempResume({ ...tempResume, achievements: newAchievements });
  };

  const handleAddExperience = () => {
    const newExperience = {
      role: "",
      company: "",
      duration: "",
      details: [""],
    };
    setTempResume((prev) => ({
      ...prev,
      experiences: [...prev.experiences, newExperience],
    }));
  };

  const handleAddDetail = (expIndex) => {
    const newExperiences = [...tempResume.experiences];
    newExperiences[expIndex].details.push("");
    setTempResume({ ...tempResume, experiences: newExperiences });
  };

  const handleAddEducation = () => {
    const newEducation = {
      degree: "",
      school: "",
      graduation: "",
    };
    setTempResume((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  };

  const handleAddAchievement = () => {
    setTempResume((prev) => ({
      ...prev,
      achievements: [...prev.achievements, ""],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-10">
      <div className="flex justify-end gap-2">
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

      <div ref={componentRef} style={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <ResumeLayout
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
    </div>
  );
};

export default Template1;
