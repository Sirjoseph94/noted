import React, { useState } from "react";
import axios from "../api/axios.js";
import { Link } from "react-router-dom";
import "../main/LoginCss.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePasssword = (e) => {
    setPassword(e.target.value);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signup", {
        username: userName,
        email: email,
        password: password,
      });
      if (response.status === 200) {
        alert("Registration successful");
        navigate("/login");
        console.log("move");
      }
      console.log("response");
    } catch (error) {
      alert(error.response.data.Error.issues[0].message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="sub_container">
          <h1>Signup</h1>
          <form>
            <div className="text_fields">
              <label>UserName:</label>
              <input
                type="text"
                placeholder="Input UserName"
                onChange={handleUserName}
                className="fields"
                size="20"
              />
              <br />

              <label>Email:</label>
              <input
                type="email"
                placeholder="email"
                className="fields"
                onChange={handleEmail}
                size="20"
              />
              <br />
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                className="fields"
                onChange={handlePasssword}
                title="Password should contain a letters,numbers and special signs"
                size="20"
                pattern="[a-z]{4,8}"
              />
              <br />
              {/* <label>confirm Password:</label>
              <input
                type="password"
                placeholder="password"
                className="fields"
                onChange={handleConfirmPassword}
                title="Password should contain a letters,numbers and special signs"
                size="20"
                pattern="[a-z]{4,8}"
              />
              <br /> */}
            </div>
            <div className="ask">
              <h4>
                Already have an account ? <Link to="/login">login here</Link>
              </h4>
            </div>

            <button className="create btn-sign" onClick={handleSubmit}>
              Create account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
