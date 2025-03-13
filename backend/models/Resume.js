const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link resume to user

  // Personal Details
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },

  // Professional Profile (LinkedIn, LeetCode, etc.)
  profiles: [
    {
      platform: { type: String, required: true }, // e.g., LinkedIn, LeetCode, Other
      link: { type: String, required: true },
    },
  ],

  // Targeted Job Details
  jobDescription: { type: String },
  targetedCompanies: { type: String },

  // Education
  education: [
    {
      degree: { type: String, required: true }, // High School, Secondary School, Graduation
      institute: { type: String, required: true },
      tenure: { type: String, required: true }, // E.g., 2015-2019
      score: { type: String, required: true },
      position: { type: String }, // Optional (only for school degrees)
    },
  ],

  // Skills
  skills: [{ type: String }], // List of technical skills

  // Work Experience
  workExperience: [
    {
      title: { type: String, required: true },
      description: { type: String },
      tenure: { type: String, required: true },
    },
  ],

  // Projects
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String },
      tenure: { type: String, required: true },
    },
  ],

  // Technical Achievements
  achievements: [
    {
      title: { type: String, required: true },
      description: { type: String },
      tenure: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Resume", resumeSchema);


