import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="footer flex flex-center bg-color" id="footer">
      <div className="container flex flex-center w-100">
        <div className="grid footer-content text-center">
          <p className="text-color">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
            reprehenderit!
          </p>
          <span className="text-color">
            &copy; {date.getFullYear().toString()} NoteMe. Theme
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
