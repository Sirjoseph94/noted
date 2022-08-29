import React from "react";
import "./About.css";
import images from "../../constants/images";

const About = () => {
  return (
    <section className="about section-p" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>
                About <span className="note">NoteMe</span>
              </h3>
            </div>
            <p className="text">
              <span className="note">NoteMe</span> is more than a great
              note-taking tool. It’s also a fully-fledged task manager and daily
              planner. Manage your work from beginning to end with a single
              tool.
            </p>
            <p className="text">
              NoteMe is designed to be as streamlined as possible. The Quick
              Prompt allows you to perform common actions with a simple
              keystroke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
