import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function Register() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmpass,setConfrimpass] = useState("");
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirmpass);
  
    try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
      };
    let result = await axios.post(
        `http://localhost:9240/signup`,
        formData,
        config
    );
    window.reload()
    } catch (error) {
      console.log(error)
      console.error("Error during signup:", error);
    }
  }
  
  return (
    <body>
    <div className="register-container">
      <div className="form-container">
        <div className="heading-section">Signup</div>
        <div className="input-box">
          <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <input type="text" placeholder="confirm password" onChange={(e)=>setConfrimpass(e.target.value)}/>
          <button className="form-button" onClick={handleSubmit}>Signup</button>
        </div>
        <div className="account-text">Already have an account? <span><Link to="/login">Login</Link></span></div>
      </div>
    </div>
    </body>
  );
}

export default Register;
