import React, {useState} from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from '@mui/icons-material/Mail';
import { navLinks } from "../constants";
import Logo from '../assets/logo.png'


const Navbar = () => {

    const [active, setActive] = useState("");

  return (
    <div className="navbar">
      <div className="first_bar">
        <div className="section ">
          <div className="phone">
                <Link to="tel:+1-820-500-1244" className="email" style={{textDecoration:"none", color:"black"}} >
                      <div><CallIcon /></div> 
                      <div> <p>(820)500-1244</p> <p>Call us anytime</p></div> 
              </Link>
             
          </div>
          <div className="address">
            <div><LocationOnIcon /></div>
            <div> <p>Location</p> <p>Seattle WA</p></div> 
          </div>
        </div>
        <div className="logo_div">
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
            <h3 style={{color:"#fab702"}}>Ellawhobird Designs</h3>
          </Link>
          
        </div>
        <div className="section">
            <div >
              <Link to="mailto:ellawhobird@gmail.com" className="email" style={{textDecoration:"none", color:"black"}} >
                <div><MailIcon /></div> 
                <div> <p>ellawhobird@gmail.com</p> <p>Drop us a line anytime</p></div> 
              </Link>
               
            </div>
          {/* <div className="handles"><p>handles</p></div> */}
        </div>
      </div>
      <div className="second_bar">
        <div className="menu">
          {navLinks.map((link)=>(
            <span
                key={link.id}
                className={`${ active === link.title ? 'active': 'inactive' }`}
                onClick={() => {
                    setActive(link.title);
                  }}
            >
                <Link to={`${link.id}`}> <p>{link.title}</p></Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
