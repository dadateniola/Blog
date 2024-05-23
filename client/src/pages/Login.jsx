import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="Username" />
        <input required type="password" placeholder="Password" />
        <button className="cta">Login</button>
        <span>This is an error!</span>
      </form>
      {/* <span>Don't have an account? <a href="/register">Register</a></span> */}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
