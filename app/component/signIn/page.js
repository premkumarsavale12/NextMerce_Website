import "../signIn/signIn.css";

const SignIn = () => {
  return (
    <div className="signinContainer">
      <div className="signinBox">
        <h2>Sign In to Your Account</h2>
        <p>Enter your details below</p>

        <form className="loginForm">
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="signinBtn">Sign in</button>
        </form>

        <div className="extraOptions">
          <a href="#">Forgot your password?</a>
          <div className="divider">Or</div>
          <button className="googleBtn">Sign In with Google</button>
          <button className="githubBtn">Sign In with Github</button>
        </div>

        <p className="signupPrompt">
          Don’t have an account? <a href="#">Sign Up Now!</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
