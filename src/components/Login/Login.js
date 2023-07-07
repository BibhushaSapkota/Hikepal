import React, { useState } from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';
import background from './background.jpeg'
import userService from '../../Services/UserService';
import { message } from 'antd';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isLogged, setIsLogged] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      message.warning("All fields are required");
      return;
    }
    userService.login({ email, password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        window.localStorage.setItem('id', response.data.user._id)
        message.success("Login Successful");
        setIsLogged(true);
        window.location = "/";
      
      }
      )
      .catch((err) => window.alert(err.response.data.error));
  };

  return (
    <div className="LoginForm-container">
      <img src={background} alt="Background" className="LoginForm-background" />
      <form className="LoginForm-form" onSubmit={handleSubmit}>
        <h1 className='Login-welcome'>Welcome to Hikepal</h1>
        <h2 className="LoginForm-heading">Login</h2>
        <div className="LoginForm-inputGroup">
          <label htmlFor="email" className="LoginForm-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="LoginForm-input"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="LoginForm-inputGroup">
          <label htmlFor="password" className="LoginForm-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="LoginForm-input"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="LoginForm-button">
          Log In
        </button>
        <div className="loginform-register">
        <h5>Don't have an account ?
                        <Link id='link-signin' to='/register'>  Register</Link>
                        </h5>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
