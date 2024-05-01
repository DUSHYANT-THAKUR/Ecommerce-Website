import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import contact_banner from "../Images/contact_us.avif";
function Contact() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [question, setQuestion] = useState("");
  function handleSubmit() {
    let formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("question", question);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      let result = axios.post(`http://localhost:9240/contact`, formData, config);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="contact-container">
        <div className="contact-banner">
          <img src={contact_banner} alt="image" />
        </div>

        <div className="contact-form-container">
          <div className="contact-heading-section">Contact Us</div>
          <span className="lines"></span>
          <div className="contact-input-box">
            <input
              type="text"
              placeholder="Fname"
              className="input-sec"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Lname"
              className="input-sec"
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-sec"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Question Section"
              className="textArea"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button className="contact-form-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
