import React, { useEffect, useState } from "react";
import API from "../api";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  title: "",
  company: "",
  location: "",
  salary: "",
  lastDate: "",
  description: ""
});

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  const addJob = async (e) => {
    e.preventDefault();
    try {
      await API.post("/jobs", form);
      alert("Job posted");
      setForm({ title: "", company: "", location: "", description: "" });
      fetchJobs();
    } catch (error) {
      alert("Login required to post a job");
    }
  };

  return (
    <div className="container">
      <h2>Jobs</h2>

  <form onSubmit={addJob} className="form">

  <input
    placeholder="Your Name"
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    required
  />

  <input
    type="email"
    placeholder="Email"
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    required
  />

  <input
    placeholder="Phone Number"
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
    required
  />

  <input
    placeholder="Job Title"
    value={form.title}
    onChange={(e) => setForm({ ...form, title: e.target.value })}
    required
  />

  <input
    placeholder="Company"
    value={form.company}
    onChange={(e) => setForm({ ...form, company: e.target.value })}
    required
  />

  <input
    placeholder="Location"
    value={form.location}
    onChange={(e) => setForm({ ...form, location: e.target.value })}
    required
  />

  <input
    placeholder="Salary"
    value={form.salary}
    onChange={(e) => setForm({ ...form, salary: e.target.value })}
    required
  />

  <input
    type="date"
    value={form.lastDate}
    onChange={(e) => setForm({ ...form, lastDate: e.target.value })}
    required
  />

  <textarea
    placeholder="Job Description"
    value={form.description}
    onChange={(e) => setForm({ ...form, description: e.target.value })}
    required
  />

  <button type="submit">Post Job</button>

  </form>
      <div className="grid">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
