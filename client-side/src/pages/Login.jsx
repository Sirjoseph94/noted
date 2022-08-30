import React, { useState } from "react";
import axios from "../api/axios.js";
import "../main/LoginCss.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePasssword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/signin", {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="sub_container">
        <h1>Login</h1>

        <form>
          <div className="text_fields">
            <label>Email:</label>
            <input
              type="email"
              placeholder="email"
              className="fields"
              size="21"
              onChange={handleEmail}
            />
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
              Dont have an account? <a href="/register"> Sign up Here</a>{" "}
            </h4>
          </div>
          <button onClick={handleSubmit}>Sign In</button>
          {/* <Link></Link> */}
        </form>
      </div>
    </div>
  );
}
