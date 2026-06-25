const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "alumni", "admin"],
      default: "student"
    },
    department: { type: String },
    batch: { type: String },
    company: { type: String },
    position: { type: String },
    bio: { type: String },
    linkedin: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
