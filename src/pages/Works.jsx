import React from 'react'
import './css/works.css'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiences } from '../constants'


const ExperienceCard = ({ experience }) =>{
  return(
    <VerticalTimelineElement
    contentStyle={{background: '#F2DCBB', color:'#000'}}
    contentArrowStyle={{borderRight: '7px solid black'}}
    iconStyle={{background: experience.iconBg}}
    > 
      <div>
        <h3 className=''>{experience.title}</h3>
        <p>{experience.date}</p>
      </div>
      <ul className='list-disc '>
        {experience.points.map((point, index) => (
          <li key={`points-${index}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}


const Works = () => {
  return (
    <div className='works'>
      
      <div className="heading">
        <h1 >Experience Journey History</h1>
        <span style={{fontWeight: "500", color:'black'}}> I've worked multiple jobs all in differing industries but there are 2 themes that remain prevalent. Firstly, all positions I've had have always had a customer as the focus, whether it be in an office or a store. Secondly, I always seem to morph into the person everyone runs to with day to day questions (which I love!).</span>
        <p style={{fontWeight: "500", color:'black'}}>My experience has shaped me into a manager that can put out any fire and communicate any frustrations.</p>
      </div>
      <div style={{marginTop:"5em" }}>
      <VerticalTimeline className='vertical-timeline'>
        {experiences.map((experience, index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>
      </div>
    </div>
  )
}

export default Works