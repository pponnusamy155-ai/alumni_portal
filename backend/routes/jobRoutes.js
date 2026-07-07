const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// ===========================
// GET ALL JOBS
// ===========================
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ===========================
// GET SINGLE JOB
// ===========================
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// ===========================
// CREATE JOB
// ===========================
router.post("/", async (req, res) => {
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

    const job = new Job({
      name,
      email,
      phone,
      title,
      company,
      location,
      salary,
      lastDate,
      description,
    });

    await job.save();

    res.status(201).json({
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// ===========================
// DELETE JOB
// ===========================
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.status(200).json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;