import React from 'react'
import './css/footer.css'
import { Link } from 'react-router-dom'
import Logo  from '../assets/logo.png'
import Cv from "../assets/Angela_Brown_Resume.docx"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="main">
        <div className="about">
          <img src={Logo} alt='logo'/>
          <span>I love researching and making my brain work hard! I've also been told I am also a breath of fresh air with a SPLASH of spontaneity. I keep things light and appreciate everyone I interact with simply because they are a human, and I almost always am able to put clients and peers at ease. I'm happiest and most content when I see others succeed.</span>
        </div>
        <div className="info">
          <h2>Information</h2>
          <div className="list">
            <ul>
              <li>About Me</li>
              <li><a className='link' href="/" download={Cv}>Resume CV</a></li>
              <li><a className='link' href="/works">My Journey</a> </li>
              <li><a className='link' href="/project">My Portfolio</a> </li>
              <li>My Artwork</li>
            </ul>
          </div>

        </div>
        <div className="links">
          <h2>Useful Links</h2>
          <div className="list">
            <ul>
              <li> <a href='/' className='link'>Home </a> </li>
              <li><a className='link' href="/works">Experience</a> </li>
              <li><a className='link' href="/project"> Latest Projects</a></li>
            </ul>
          </div>
        </div>
        <div className="help">
          <h2>Help center</h2>
          <div className="list">
            <ul>
              <li>FAQ</li>
              <li>Privacy & Policy</li>
              <li>Terms and Condition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="credits">
        <p> © 2023 - <span> Ellawhobird Designs </span> </p>
      </div>

    </div>
  )
}

export default Footer