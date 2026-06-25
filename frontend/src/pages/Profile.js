import React, { useEffect, useState } from "react";
import API from "../api";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    batch: "",
    company: "",
    position: "",
    bio: "",
    linkedin: ""
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/users/profile");
      setForm(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      await API.put("/users/profile", form);
      alert("Profile updated");
    } catch (error) {
      alert("Update failed");
    }
  };

  return (
    <div className="container">
      <h2>My Profile</h2>
      <form onSubmit={updateProfile} className="form">
        <input value={form.name || ""} placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input value={form.department || ""} placeholder="Department" onChange={(e) => setForm({ ...form, department: e.target.value })} />
        <input value={form.batch || ""} placeholder="Batch" onChange={(e) => setForm({ ...form, batch: e.target.value })} />
        <input value={form.company || ""} placeholder="Company" onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <input value={form.position || ""} placeholder="Position" onChange={(e) => setForm({ ...form, position: e.target.value })} />
        <textarea value={form.bio || ""} placeholder="Bio" onChange={(e) => setForm({ ...form, bio: e.target.value })} />
        <input value={form.linkedin || ""} placeholder="LinkedIn" onChange={(e) => setForm({ ...form, linkedin: e.target.value })} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
