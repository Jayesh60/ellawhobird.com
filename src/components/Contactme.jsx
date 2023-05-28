import React, {useRef} from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import './css/contactme.css'
import emailjs from '@emailjs/browser';



const Contactme = () => {
    

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_6padj9s', 'template_34nyu5m', form.current, 'nnEYEDwOjnxsxdiUK')
      .then((result) => {
        alert("message sent! Thank you for your feedback")
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <div>
      <div className="contactme">
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <h3 style={{ margin: "0" }}>Contact Us</h3>
            <h1 style={{ margin: "0" }}>Get In Touch</h1>
            <div className="email">
              <input type="text" placeholder="Name" name="username" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="msg">
              <textarea
                style={{
                  resize: "none",
                  marginTop: "10px",
                  fontSize: "16px",
                  backgroundColor: "#cacaca",
                }}
                cols="70"
                rows="8"
                placeholder="Message"
                name="msg"
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" className="submitBtn" value="Submit Now" />
            </div>
          </form>
        </div>
        <div className="loc">
          <h2>Let Me Know About Your Big Project Idea</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <LocationOnIcon /> <span>Seattle WA</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <MailIcon />
            <Link
              to="mailto:ellawhobird@gmail.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>ellawhobird@gmail.com</span>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <CallIcon />
            <Link
              to="tel:+1-820-500-1244"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>(820)500-1244</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
