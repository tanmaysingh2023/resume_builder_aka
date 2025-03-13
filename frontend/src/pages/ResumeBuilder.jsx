import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeBuilder = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  
  const [profiles, setProfiles] = useState([{ platform: "", link: "" }]);
  const [education, setEducation] = useState([{ degree: "", institute: "", tenure: "", score: "", position: "" }]);
  const [jobDescription, setJobDescription] = useState("");
  const [targetedCompanies, setTargetedCompanies] = useState("");
  const [workExperience, setWorkExperience] = useState([{ title: "", description: "", tenure: "" }]);
  const [projects, setProjects] = useState([{ title: "", description: "", tenure: "" }]);  
  const [achievements, setAchievements] = useState([{ title: "", description: "", tenure: "" }]);
  
  const [skills, setSkills] = useState([""]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, phone, email, profiles, jobDescription, targetedCompanies, education, skills, workExperience, projects, achievements };
    console.log(data)
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to submit your resume.");
        return;
      }

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      });
      console.log(response.ok)
      if (response.ok) {
        alert("Resume submitted successfully!");
        navigate("/dashboard", { state: { resumeData: data } });
      } else {
        alert("Failed to submit resume.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleAddField = (state, setState, newField) => {
    setState([...state, newField]);
  };

  const handleDeleteField = (state, setState, index) => {
    setState(state.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-yellow  text-white flex items-center justify-center p-6 pt-20">
  <div className="max-w-4xl w-full bg-black-900 border-t-amber-50 rounded-lg shadow-lg p-8">
    <h2 
      className="text-3xl font-bold text-white-400 mb-6"    >
      Build Your Resume</h2>

      <form onSubmit={handleSubmit}>
        
        {/* Personal Details */}
        <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
          <h2 className="text-xl font-semibold text-white-400 mb-4">Personal Details</h2>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required   
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"          />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required  
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"          />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required   
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"          />
        </section>

        {/* Professional Profiles */}
        <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
          <h2 className="text-xl font-semibold text-white-400 mb-4">Professional Profiles</h2>
          {profiles.map((profile, index) => (
            <div key={index}>
              <input type="text" value={profile.platform} onChange={(e) => {
                const newProfiles = [...profiles];
                newProfiles[index].platform = e.target.value;
                setProfiles(newProfiles);
              }} placeholder="Platform" required 
              className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"/>
              <input type="url" value={profile.link} onChange={(e) => {
                const newProfiles = [...profiles];
                newProfiles[index].link = e.target.value;
                setProfiles(newProfiles);
                
              }} placeholder="Profile Link" required 
              className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"              />
              <div className="button-container flex flex-wrap justify-center">
              <button type="button" onClick={() => handleDeleteField(profiles, setProfiles, index)} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Delete</button>
              </div>
            </div>
          ))}
          <div className="button-container flex flex-wrap justify-center">
          <button type="button" onClick={() => handleAddField(profiles, setProfiles, { platform: "", link: "" })} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Add Profile</button>
          </div>
        </section>

        {/* Skills */}
        <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
          <h2 className="text-xl font-semibold text-white-400 mb-4">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index}>
              <input
                type="text"
                value={skill}
                onChange={(e) => {
                  const updatedSkills = [...skills];
                  updatedSkills[index] = e.target.value;
                  setSkills(updatedSkills);
                }}
                placeholder="Skill"
                required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
              />
              <div className="button-container flex flex-wrap justify-center">
              <button type="button" onClick={() => handleDeleteField(skills, setSkills, index)} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Delete</button>
              </div>  
            </div>
          ))}
          <div className="button-container flex flex-wrap justify-center">
          <button type="button" onClick={() => handleAddField(skills, setSkills, "")} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Add Skill</button>
          </div>
        </section>

        {/* Education */}
        <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
  <h2 className="text-xl font-semibold text-white-400 mb-4">Education</h2>
  {education.map((edu, index) => (
    <div key={index}>
      <input
        type="text"
        value={edu.degree}
        onChange={(e) => {
          const newEducation = [...education];
          newEducation[index].degree = e.target.value;
          setEducation(newEducation);
        }}
        placeholder="Degree"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={edu.institute}
        onChange={(e) => {
          const newEducation = [...education];
          newEducation[index].institute = e.target.value;
          setEducation(newEducation);
        }}
        placeholder="Institute"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={edu.tenure}
        onChange={(e) => {
          const newEducation = [...education];
          newEducation[index].tenure = e.target.value;
          setEducation(newEducation);
        }}
        placeholder="Tenure (e.g., 2018-2022)"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={edu.score}
        onChange={(e) => {
          const newEducation = [...education];
          newEducation[index].score = e.target.value;
          setEducation(newEducation);
        }}
        placeholder="Score/CGPA"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <div className="button-container flex flex-wrap justify-center">
      <button type="button" onClick={() => handleDeleteField(education, setEducation, index)} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Delete</button>
      </div>
    </div>
  ))}
  <div className="button-container flex flex-wrap justify-center">
  <button type="button" onClick={() => handleAddField(education, setEducation, { degree: "", institute: "", tenure: "", score: "", position: "" })}
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >Add Education</button>
  </div>
</section>

        
        {/* Job Description and Targeted Companies */}
        <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
          <h2 className="text-xl font-semibold text-white-400 mb-4">Targeted Job Details</h2>
          <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Job Description" className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"/>
          <input type="text" value={targetedCompanies} onChange={(e) => setTargetedCompanies(e.target.value)} placeholder="Targeted Companies"                 
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"  />
        </section>

      {/* Work Experience */}
      <section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
      <h2 className="text-xl font-semibold text-white-400 mb-4">Work Experience</h2>
  {workExperience.map((exp, index) => (
    <div key={index}>
      <input
        type="text"
        value={exp.title}
        onChange={(e) => {
          const updatedExperience = [...workExperience];
          updatedExperience[index] = { ...updatedExperience[index], title: e.target.value };
          setWorkExperience(updatedExperience);
        }}
        placeholder="Job Title"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={exp.description}
        onChange={(e) => {
          const updatedExperience = [...workExperience];
          updatedExperience[index] = { ...updatedExperience[index], description: e.target.value };
          setWorkExperience(updatedExperience);
        }}
        placeholder="Description"
      />
      <input
        type="text"
        value={exp.tenure}
        onChange={(e) => {
          const updatedExperience = [...workExperience];
          updatedExperience[index] = { ...updatedExperience[index], tenure: e.target.value };
          setWorkExperience(updatedExperience);
        }}
        placeholder="Tenure"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <div className="button-container flex flex-wrap justify-center">
      <button type="button" onClick={() => setWorkExperience(workExperience.filter((_, i) => i !== index))} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
        Delete
      </button>
      </div>
    </div>
  ))}
  <div className="button-container flex flex-wrap justify-center">
  <button type="button" onClick={() => setWorkExperience([...workExperience, { title: "", description: "", tenure: "" }])} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
    Add Work Experience
  </button>
  </div>
</section>

{/* Projects */}
<section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
<h2 className="text-xl font-semibold text-white-400 mb-4">Projects</h2>
  {projects.map((proj, index) => (
    <div key={index}>
      <input
        type="text"
        value={proj.title}
        onChange={(e) => {
          const updatedProjects = [...projects];
          updatedProjects[index] = { ...updatedProjects[index], title: e.target.value };
          setProjects(updatedProjects);
        }}
        placeholder="Project Title"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={proj.description}
        onChange={(e) => {
          const updatedProjects = [...projects];
          updatedProjects[index] = { ...updatedProjects[index], description: e.target.value };
          setProjects(updatedProjects);
        }}
        placeholder="Description"
      />
      <input
        type="text"
        value={proj.tenure}
        onChange={(e) => {
          const updatedProjects = [...projects];
          updatedProjects[index] = { ...updatedProjects[index], tenure: e.target.value };
          setProjects(updatedProjects);
        }}
        placeholder="Tenure"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <div className="button-container flex flex-wrap justify-center">
      <button type="button" onClick={() => setProjects(projects.filter((_, i) => i !== index))} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
        Delete
      </button>
      </div>
    </div>
  ))}
  <div className="button-container flex flex-wrap justify-center">
  <button type="button" onClick={() => setProjects([...projects, { title: "", description: "", tenure: "" }])} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
    Add Project
  </button>
  </div>
</section>

{/* Technical Achievements */}
<section className=" flex flex-col  mb-6 p-6 bg-black-800 rounded-lg border border-white shadow-md">
<h2 className="text-xl font-semibold text-white-400 mb-4">Technical Achievements</h2>
  {achievements.map((ach, index) => (
    <div key={index}>
      <input
        type="text"
        value={ach.title}
        onChange={(e) => {
          const updatedAchievements = [...achievements];
          updatedAchievements[index] = { ...updatedAchievements[index], title: e.target.value };
          setAchievements(updatedAchievements);
        }}
        placeholder="Achievement Title"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <input
        type="text"
        value={ach.description}
        onChange={(e) => {
          const updatedAchievements = [...achievements];
          updatedAchievements[index] = { ...updatedAchievements[index], description: e.target.value };
          setAchievements(updatedAchievements);
        }}
        placeholder="Description"
      />
      <input
        type="text"
        value={ach.tenure}
        onChange={(e) => {
          const updatedAchievements = [...achievements];
          updatedAchievements[index] = { ...updatedAchievements[index], tenure: e.target.value };
          setAchievements(updatedAchievements);
        }}
        placeholder="Tenure"
        required
className="w-full my-3 p-3 bg-black-700 border border-white-400 rounded-md outline-none focus:ring-2 focus:ring-white-400"
      />
      <div className="button-container flex flex-wrap justify-center">
      <button type="button" onClick={() => setAchievements(achievements.filter((_, i) => i !== index))} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
        Delete
      </button>
      </div>
    </div>
  ))}
  <div className="button-container flex flex-wrap justify-center">
  <button type="button" onClick={() => setAchievements([...achievements, { title: "", description: "", tenure: "" }])} 
  className="mt-3 py-2 px-5 bg-gradient-to-r from-white to-white hover:from-white hover:to-white text-black rounded-lg shadow-md transition-all duration-300"
  >
    Add Achievement
  </button>
  </div>
</section>

        <button type="submit"  
        className="w-full py-3 px-5 bg-white hover:bg-slate-400 text-black rounded-md transition duration-300"
        >Submit</button>
      </form>
    </div>
</div>    
  );
};

export default ResumeBuilder;
