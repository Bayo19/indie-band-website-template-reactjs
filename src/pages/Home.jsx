import React from "react";

// Components
import Poster from '../components/Poster/Poster'
import Card from '../components/Card/Card.jsx'
import Footer from '../components/Footer/Footer'

const Home = () => {

  return (
    <div className="Home">
      <Poster 
        title={'new Album'} 
        albumTitle={'Nowhere'}
        date={'2020.07.05'}
      />
      <Card />
      <Footer />
    </div>
  )
  
}

export default Home