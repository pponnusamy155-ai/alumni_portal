import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Alumni Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/alumni">Alumni</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/events">Events</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
