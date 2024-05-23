import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name] : e.target.value}));
    
    //WHY DOES THIS LOG STATEMENT SHOW OLD DATA
    // console.log(inputs);
  }
  
  const handleClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8800/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(inputs)
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="Email" name="email" onChange={handleChange}/>
        <input required type="password" placeholder="Password" name="password" onChange={handleChange}/>
        <button className="cta" type="button" onClick={handleClick}>Register</button>
        <span>This is an error!</span>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
