import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h3 className="text-uppercase header-title">
            The simplest way to keep notes
          </h3>

          <p className="text-lead">
            <span className="note">NoteMe</span> is a digital notebook that
            blends notes, tasks, whiteboards, and a daily planner into one
            streamlined app.
          </p>
          <a href="/register" className="btn header-btn btn-blue">
            <FaUserAlt /> <span>Sign up now</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
