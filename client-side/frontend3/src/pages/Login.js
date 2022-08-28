import React, { useState } from "react";
import axios from "../api/axios.js";
import { Link } from "react-router-dom";

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
      //remember to add my route
      const response = await axios.post("#", {
        email: email,
        password: password,
      });
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="child">
          <h1>Login</h1>

          <form>
            <div className="text_fields">
              <label htmfor="email">Email:</label>
              <input
                type="email"
                placeholder="email"
                className="fields"
                size="20"
                onChange={handleEmail}
              />
              <br />
              <label htmfor="password">Password:</label>
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
              <h4>Dont have an account? Sign up Here </h4>
            </div>
            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
}
