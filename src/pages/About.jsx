import React from "react";

// Components
import HeaderPic from '../components/headerPicture/headerPic'
import BioText from '../components/BioText/biotext'
import Footer from '../components/Footer/Footer'

const About = () => {

  return (

    <div>
      <div className="aboutContent">
        <HeaderPic />
        <BioText />
        <Footer />
      </div>
    </div>
  )
  
}

export default About