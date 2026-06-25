import React from "react";

function JobCard({ job }) {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p><b>Company:</b> {job.company}</p>
      <p><b>Location:</b> {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobCard;
