const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const resumeData = req.body;
    const newResume = new Resume(resumeData);
    await newResume.save();
    res.status(201).json({ message: "Resume saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save resume", details: error.message });
  }
});

module.exports = router;
