import React, { useState } from "react";
import axios from "../api/axios.js";
import { Link } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePasssword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //remember to add my route
      const response = await axios.post("#", {
        userName: userName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      // console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="child">
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
              <label>Phone number:</label>
              <input
                type="number"
                placeholder="phone number"
                onChange={handlePhoneNumber}
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
              <label>confirm Password:</label>
              <input
                type="password"
                placeholder="password"
                className="fields"
                onChange={handleConfirmPassword}
                title="Password should contain a letters,numbers and special signs"
                size="20"
                pattern="[a-z]{4,8}"
              />
              <br />
            </div>
            <div className="ask">
              <h4>Already have an account ? login here</h4>
            </div>

            <button onClick={handleSubmit}>Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
