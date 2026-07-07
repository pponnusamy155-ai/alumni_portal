import React from "react";

function JobCard({ job }) {
  return (
    <div className="card">
      <h2>{job.title}</h2>

      <p><strong>Name:</strong> {job.name}</p>

      <p><strong>Email:</strong> {job.email}</p>

      <p><strong>Phone:</strong> {job.phone}</p>

      <p><strong>Company:</strong> {job.company}</p>

      <p><strong>Location:</strong> {job.location}</p>

      <p><strong>Salary:</strong> ₹{job.salary}</p>

      <p><strong>Last Date:</strong> {job.lastDate}</p>

      <p><strong>Description:</strong></p>
      <p>{job.description}</p>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
}

export default JobCard;