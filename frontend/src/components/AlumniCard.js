import React from "react";

function AlumniCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Role:</b> {user.role}</p>
      <p><b>Department:</b> {user.department}</p>
      <p><b>Batch:</b> {user.batch}</p>
      <p><b>Company:</b> {user.company}</p>
      <p><b>Position:</b> {user.position}</p>
    </div>
  );
}

export default AlumniCard;
