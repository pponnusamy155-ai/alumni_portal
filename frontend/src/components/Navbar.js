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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Alumni Portal</h2>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/alumni" onClick={() => setMenuOpen(false)}>Alumni</Link>
        <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
        <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
        <Link to="/posts" onClick={() => setMenuOpen(false)}>Posts</Link>
        <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>

        {!token ? (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;