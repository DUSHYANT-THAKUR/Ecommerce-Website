import React,{useState} from "react";
import login_img from "../Images/login.jpg"
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
async function handleSubmit() {
  let formData = new FormData();
  formData.append("email",email)
  formData.append("password",password)

  try {
    const config = {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
  };
    let result = await axios.post("http://localhost:9240/login", formData, config);
    console.log(result.status);
    if(result.status===200){
navigate("/Home")
    }
  } catch (error) {
    console.log(error)
    console.error("Error during signup:", error);
  }

}
  return (
    <div className="login-content" >
    <div className="login-container">
      <div className="login-form-container wid-50 arrange-left">
        <div className="login-heading-section">Login</div>
        <div className="login-input-box">
          <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
         
          <button className="login-form-button" onClick={handleSubmit}>Login</button>
        </div>
       
      </div>
      <div className="side-img wid-50 arrange-left">
<img src= {login_img} alt="image" />
      </div>
    </div>
    </div>
  );
}

export default Login;
