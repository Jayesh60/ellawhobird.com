import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";
import Cv from "../assets/Angela_Brown_Resume.docx";
import Works from "./Works";
import Service from "../components/Service";
import Project from "../components/Project";
import BannerImg from "../assets/bannerImg.png";
import WorkingWomen from "../assets/workingWomen.jfif";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="intro">
          <div className="heading">
            <h1 style={{ fontSize: "3em" }}>
              I'm <span style={{ color: "#fab702" }}>Angi</span>
            </h1>
            <h2 style={{ marginBottom: "10px", fontSize: "2em" }}>
              UX Designer & Project Manager
            </h2>
          </div>
          <div>
            <h2>Certified UX Designer+</h2>
            <h4>
              $500,000 yearly sales in a busy University bookstore with unique
              responsibilities
            </h4>
            <span style={{ color: "slategray" }}>
              Are you looking for the right person to fill an important position
              within your organization? I am exactly what you need! I have a
              proven track record of success and I want to be an immediate asset
              for your team. With <span style={{ fontWeight: "500" }}>10+</span>{" "}
              years of experience in various professional fields, and I am
              well-equipped with
              <ul style={{ color: "black", fontWeight: "500" }}>
                <li>Unique skillsets</li>
                <li>Wide spread of knowledge</li>
                <li>Expertise in business, UX and customer/client care and </li>
                <li>A curious mind</li>
              </ul>
              These strengths and attributes will pay dividends for any business
              where I find my work family and home.
            </span>
          </div>
          <div className="buttons">
            <div className="portfolio">
              <Link to="/project">
                <p>Portfolio</p>
              </Link>
            </div>
            <div className="download">
              <a href="/" download={Cv}>
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
        <div className="banner_img">
          <img src={BannerImg} alt="Banner Img" />
        </div>
      </div>
      <div className="aboutme">
        <div className="left">
          <div className="head">
            <h1>About Me</h1>
          </div>
          <div className="img">
            <img src={WorkingWomen} alt="photo" />
          </div>
        </div>
        <div className="right">
          <div className="para">
            <div className="up" style={{ marginBottom: "15px" }}>
              <strong>
                I love researching and making my brain work hard! I've also been
                told I am also a breath of fresh air with a SPLASH of
                spontaneity.
              </strong>

              <strong>
                I keep things light and appreciate everyone I interact with
                simply because they are a human, and I almost always am able to
                put clients and peers at ease. I'm happiest and most content
                when I see others succeed.
              </strong>
            </div>

            <div className="down">
              <h2 style={{ marginBottom: "15px" }}>What's Important</h2>
              <p style={{ marginBottom: "15px" }}>
                <strong >
                  I have worked as a professional content writer for b2b
                  transactions for over 4 years.
                </strong>
                I have non-traditional on the job training and learned by doing,
                my favorite way to learn!
              </p>
              <p style={{ marginBottom: "15px" }}>
                <strong>
                  I have experience working in a variety of industries,
                </strong>
                including e-commerce, healthcare, FINtech and management.
              </p>
              <p style={{ marginBottom: "15px" }}>
                I have a deep understanding of the UX design process, from{" "}
                <strong>user research to wireframes</strong> to prototyping,
                with a portfolio. I also have a deep understanding of
                researching, creating, editing and publishing good copy.
              </p>
              <p>
                I am confident in my ability to design user-friendly and
                intuitive marketing that <strong>meet the needs of users</strong>  and businesses
                alike.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Works />
    </div>
  );
};

export default Home;
