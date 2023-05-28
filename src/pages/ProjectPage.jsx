import React from 'react'
import Project from '../components/Project'
import Banner_works from "../components/banner/banner_works";
import Banner_project from '../components/banner/banner_project'
import ProjectBanner from "../assets/download.jfif"


const ProjectPage = () => {
  return (
    <div>
        <Banner_works title="Portfolio Detail" Project={ProjectBanner}/>
        <Banner_project/>
        <Project/>
    </div>
  )
}

export default ProjectPage