import React from "react";
import "./css/project.css";
import { Link } from "react-router-dom";
import DakPoster from "../assets/DakTechs/DakTechPoster.png";
import EasyPoster from "../assets/EasyFarmBook/EasyPoster.png";
import SpoonFlowPoster from "../assets/SpoonFlow/SpoonFlowPoster.png";
import BirdSeedPoster from "../assets/BirdSeed/Birdseed Case Study/BirdSeedPoster.jpg";
import WynotPoster from "../assets/wynot/wynot_poster.jpg";
import CoffeePoster from "../assets/CoffeeCase/4.png";
import Green from "../assets/OfficeGreen/Green3.jpg"

const Project = () => {
  return (
    <div className="project_main">
      <div className="latest">
        <div className="heading">
          <h1 style={{ textDecoration: "underline" }}>Latest Work</h1>
        </div>
        <div className="cardMain">
          <Link to="/project/birdseed" className="card">
            <div className="fCard" style={{ backgroundColor: "#464646" }}>
              <img src={BirdSeedPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">BirdSeed Ordering App</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                November 15 2022
              </h5>
            </div>
          </Link>

          <Link className="card">
            <div className="fCard" style={{ backgroundColor: "#464646" }}>
              <img src={Green} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">Office Green</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                May 25 2023
              </h5>
            </div>
          </Link>
        </div>
      </div>

      <div className="websites">
        <div className="heading">
          <h3 style={{ textDecoration: "underline" }}>Websites</h3>
        </div>
        <div className="cardMain">
          <Link to="/project/farm_accounting" className="card">
            <div className="fCard" style={{ backgroundColor: "#464646" }}>
              <img src={EasyPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">Farm Accounting Landing Page</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                October 15 2022
              </h5>
            </div>
          </Link>

          <Link to="/project/coffee_cafe_app" className="card">
            <div className="fCard" style={{ backgroundColor: "#464646" }}>
              <img src={CoffeePoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">Coffee Cafe Online Ordering App</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                October 15 2022
              </h5>
            </div>
          </Link>

          <Link to="/project/wynot_saloon" className="card">
            <div className="fCard" style={{ backgroundColor: "#464646" }}>
              <img src={WynotPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">Wynot Saloon</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                May 1 2023
              </h5>
            </div>
          </Link>
        </div>
      </div>

      <div className="artwork">
        <div className="heading">
          <h3 style={{ textDecoration: "underline" }}>Artwork & Logos</h3>
        </div>
        <div className="cardMain">
          <Link to="/project/spoonflow" className="card">
            <div className="fCard" style={{ backgroundColor: "#da3038" }}>
              <img src={SpoonFlowPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">SpoonFlow</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                Jan 1 2021
              </h5>
            </div>
          </Link>

          <Link to="/project/daktech" className="card">
            <div className="fCard" style={{ backgroundColor: "#da3038" }}>
              <img src={DakPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">DakTech Solutions Brand</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                September 1 2022
              </h5>
            </div>
          </Link>

          <Link to="/project/easyfarm" className="card">
            <div className="fCard" style={{ backgroundColor: "#da3038" }}>
              <img src={EasyPoster} alt="" />
            </div>
            <div className="data">
              <h4 className="m-0">EasyFarm Logo (reworked)</h4>
              <h5 className="m-0" style={{ color: "slategray" }}>
                October 15 2022
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
