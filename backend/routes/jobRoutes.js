const express = require("express");
const Job = require("../models/Job");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new job
router.post("/", protect, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      title,
      company,
      location,
      salary,
      lastDate,
      description,
    } = req.body;

    const job = await Job.create({
      name,
      email,
      phone,
      title,
      company,
      location,
      salary,
      lastDate,
      description,
      postedBy: req.user.id,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;