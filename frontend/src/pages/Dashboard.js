import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <h1>College Alumni Network Portal</h1>
      <p>
        Welcome to the alumni network platform where students and alumni can
        connect, share jobs, attend events, and stay connected with the college.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Alumni Directory</h3>
          <p>Browse and connect with alumni from different departments.</p>
        </div>
        <div className="card">
          <h3>Jobs</h3>
          <p>Find internships and job opportunities shared by alumni.</p>
        </div>
        <div className="card">
          <h3>Events</h3>
          <p>Participate in alumni meetups, webinars, and college events.</p>
        </div>
        <div className="card">
          <h3>Community Posts</h3>
          <p>Share updates, announcements, and discussions.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
