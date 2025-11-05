import React from "react";
// import "./LoginModal.css"; 
import "../component/LoginModel.css"


const LoginModal = ({ onClose }) => {

  
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2>Sign In to Your Account</h2>
        <p>Enter your detail below</p>

        <form className="loginForm">
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Sign in</button>
        </form>

        <div className="extraOptions">
          <a href="#">Forgot your password?</a>  <p className="signupPrompt">
          Don't have an account? <a href="#">Sign Up Now!</a>
        </p>
          <div className="divider">Or</div>
          <button className="googleBtn">Sign In with Google</button>
          <button className="githubBtn">Sign In with Github</button>
        </div>

        <p className="signupPrompt">
          Don't have an account? <a href="#">Sign Up Now!</a>
        </p>

        <button className="closeBtn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default LoginModal;
