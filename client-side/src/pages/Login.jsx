import React, { useState } from "react";
import axios from "../api/axios.js";
import "../main/LoginCss.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePasssword = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signin", {
        email: email,
        password: password,
      });
      console.log(response)
      if (response.data.success) {
        localStorage.setItem("token", response.data.data)
        console.log("login successful");
        navigate("/notes");
     
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error.issues[0].message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="sub_container">
          <h1>Login</h1>

          <form>
            <div className="text_fields">
              <label>Email:</label>
              <input
                type="email"
                placeholder="email"
                className="fields"
                size="20"
                onChange={handleEmail}
              />
              s
              <br />
              <label>Password:</label>
              <input
                type="password"
                placeholder="password"
                className="fields"
                title="Password should contain a letters,numbers and special signs"
                size="20"
                pattern="[a-z]{4,8}"
                onChange={handlePasssword}
              />
              <br />
            </div>
            <div className="ask">
              <h4>
                Dont have an account? <a href="/register"> Sign-up</a>{" "}
              </h4>
            </div>
            <button className="btn-sign" onClick={handleSubmit}>
              Sign In
            </button>

            {/* <Link></Link> */}
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
