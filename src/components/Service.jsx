import React from 'react'
import { Link } from 'react-router-dom'
import './css/service.css'
import Contactme from '../components/Contactme'
import Arrow from '@mui/icons-material/NavigateNext';
import Plantzone from '../assets/plantzone.jfif'
import Stayhome from '../assets/stayhome.png'
import Pencils from '../assets/pencils.jfif'
import Lucy from "../assets/lucycard.jfif"
import Ui from "../assets/uiux.jfif"
import Book1 from "../assets/Handbook.png"
import header from "../assets/header.png"
import Website from "../assets/website.png"

const Service = () => {
  return (
    <div className='service'>
      
      <div className="text">
        <div className="heading">
          <h1>Offer Wide Range of Top Notch Services</h1>
        </div>
        <div className='para'>
          <h5>Beginning with brand book creation <span style={{fontWeight:"1000"}}>businesses can establish a brand identity and keep their graphics cohesive and consistent.</span>  This is an important step in maintaining a professional tone of voice and building a strong visual presence. Brand book creation can help businesses large and small create a united front and make a lasting impression on customers.</h5>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="firstRow">
          <div className="fCard image">
            <img src={Plantzone} alt='Logo'/>
          </div>
          <div className="fCard" style={{backgroundColor:"#fab702"}}>
            <h3>Creative Logo Design</h3>
            <h5>Top notch, personalized logo design that will establish the framework for a brand book.</h5>
            <Link className='rm'>Read More <Arrow/></Link>
          </div>
          <div className="fCard image" >
            <img src={Pencils} alt='Logo'/>
          </div>
          <div className="fCard" style={{backgroundColor:"#D2042D"}}>
            <h3>Mobile Apps</h3>
            <h5>Invest in creation of a mobile app to create a more professional looking mobile presense</h5>
            <Link className='rm'>Read More<Arrow/></Link>
          </div>
          <div className="fCard image">
            <img src={Website} alt='Logo'/>
          </div>
        </div>
        <div className="secondRow">
          <div className="sCard"   style={{backgroundColor:"#E3DFFD"}}>
            <h3>Brand Book</h3>
            <h5>Brandbook creation can help businesses large and small create a united front and make a lasting impression on customers.</h5>
            <Link className='rm'>Read More<Arrow/></Link>
          </div>
          <div className="sCard image">
            <img src={Book1} alt='Logo'/>
          </div>
        </div>
        <div className="thirdRow">
          <div className="fCard" style={{backgroundColor:"#C9DBB2"}} >
              <h3>Landing Page</h3>
              <h5>Basic landing page with attached, in addition to separated pages that guide the customer</h5>
              <Link className='rm'>Read More<Arrow/></Link>
            </div>
            <div className="fCard image">
            <img src={Ui} alt='Logo'/>
            </div>
            <div className="fCard" style={{backgroundColor:"#9ce2e4"}}>
              <h3>UI/UX Design</h3>
              <h5>Web app creation and communication with your development team or our own to set up live web app</h5>
              <Link className='rm'>Read More<Arrow/></Link>
            </div>
            <div className="fCard image">
              <img src={Lucy} alt='Logo'/>
              
            </div>
            <div className="fCard" style={{backgroundColor:"#FDCEDF"}}>
              <h3>Presentation</h3>
              <h5>Bank and funding partner presentations that will impress any executive</h5>
              <Link className='rm'>Read More<Arrow/></Link>
          </div>

        </div>

        <div className="fourthRow">
          <div className="sCard image">
            <img src={header} alt='Logo'/>
          </div>
          <div className="sCard" style={{backgroundColor:"#98EECC"}}>
          < h3>Website Design</h3>
          <h5>Basic Website creation for those who are just starting out</h5>
            <Link className='rm'>Read More<Arrow/></Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Service