const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// Save activity
router.post("/save-activity", auth, async (req, res) => {
  const { activity } = req.body;

  try {
    const user = await User.findById(req.userId);
    user.activities.push(activity);
    await user.save();

    res.json({ message: "Activity saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save activity" });
  }
});

// Get activities
router.get("/get-activities", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json({ activities: user.activities });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch activities" });
  }
});

module.exports = router;
