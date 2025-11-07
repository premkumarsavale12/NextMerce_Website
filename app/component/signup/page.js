"use client";
// import "./signup.css";
 import "../signup/sign.css"
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted", formData);
    alert("Account created successfully!");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>Join us today! Fill out the form below.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Re-type Password</label>
            <input
              type="password"
              name="rePassword"
              placeholder="Re-enter password"
              value={formData.rePassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Create Account</button>

          <p className="forgot-password"> Already have an account ?
            <a href="#">Sign In </a>
          </p>
        </form>
      </div>
    </div>
  );
}
