import React from 'react'
import Service from "../components/Service"
import Banner_works from "../components/banner/banner_works";
import ServiceBanner from "../assets/services.jfif"

const ServicePage = () => {
  return (
    <div>
        <Banner_works title="All Services" Project={ServiceBanner}/>
        <Service/>
    </div>
  )
}

export default ServicePage