import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ username, onLogout, userData }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">Sitename</span>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile" onClick={toggleDropdown}>
          <span>{username}</span>
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="navbar-avatar"
          />
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            <div>
              <h3>Account Information</h3>
              <p>Username: {userData.username}</p>
              <p>Email: {userData.email}</p>
              <p>Password: {userData.password}</p>
            </div>
            <button onClick={onLogout} className="logout-button">
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
