import React, { useState } from "react";
import "./RegistrationForm.css";
import backgroundImage from "./background1.jpg";
import userService from "../../Services/UserService";
import { Navigate } from "react-router-dom";
import { message } from "antd";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);




  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (!firstName ||!lastName  ||!phoneNumber || !email || !password || !confirmPassword) {
        throw new Error('All fields are required')
      }  
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      } 
      const response = await userService.register({firstName,lastName,phoneNumber,email,password })
      
  
      if (response.data.status) {
        message.success("User registered Successful")
        Navigate('/login')
        
      } else {
        throw new Error('Error occurred while registering')
      }
    } catch (error) {
      window.alert(e.response.data.error)
    }
  }
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-container">
      <div className="registration-wrapper">
        <div className="registration-form">
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`password-toggle ${showPassword ? "active" : ""}`}
                  onClick={togglePasswordVisibility}
                >
                  <span></span>
                </i>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            </div>
            <button type="submit">Create Account</button>
          </form>
          <div className="loginform-register">
            <h5>
              Already have an account? <a href="/login">Login</a>
           
            </h5>
            </div>
        </div>
        </div>
    </div>
    );
}

export default RegistrationForm;

