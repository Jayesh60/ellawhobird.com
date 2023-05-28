import React from 'react'
import './css/banner_works.css'


const banner_works = ({title, Project}) => {
  return (
    <div className='banner_works' style={{ backgroundImage: `url(${Project})`, backgroundSize:"cover"}}>
        <h1 style={{margin:"0"}}>{title}</h1>
        <p> - Angela Brown</p>
    </div>
  )
}

export default banner_works