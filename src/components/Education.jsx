import React from "react";
import "./css/education.css";
import { education } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Works from "../pages/Works";
import Banner_works from "./banner/banner_works";
import WorksBanner from "../assets/works.jfif"



const EducationCard = ({ edu }) => {
  return (
    <>
      <VerticalTimelineElement
        
        contentStyle={{ background: "#F2DCBB", color: "#000" }}
        contentArrowStyle={{ borderRight: "7px solid black" }}
        iconStyle={{ background: "#F2DCBB" }}
      >
        <div>
          <h3 className="">{edu.title}</h3>
          <p>{edu.date}</p>
        </div>
        <ul className="list-disc ">
          {edu.points.map((point, index) => (
            <li key={`points-${index}`}>{point}</li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  );
};

const Education = () => {
  return (
    <div>
      <Banner_works title={"Education & Work Details"} Project={WorksBanner}/>
      <Works/>
      <div className="heading">
        <h1>Education Journey History</h1>
        <span style={{ fontWeight: "500", color: "black" }}>
          I am an eternal learner and I am constantly trying to know more about
          what I'm working on.
        </span>
      </div>

      <div style={{marginTop:"5em" }}>
        <VerticalTimeline className="vertical-timelinee">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
