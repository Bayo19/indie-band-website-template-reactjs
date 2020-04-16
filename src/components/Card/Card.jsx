import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

// JSON
import CardData from './Card.json'

//Styles
import './card.css'

const Cards = () => {

    let cardAnime = useRef(null)
    
    useEffect(function(){
        TweenMax.from(cardAnime, .90, {opacity: 0, ease:Power3.easeIn})
    },)
        return (
          <>
          
          <div ref={el => cardAnime = el} className="cardContainer">
          {CardData.map(function(data){
              return (
              <div key={data.id} className="theCard">
                  <div className="image" style={{backgroundImage: `url(${data.image})`}}></div>
              <div className="info">
                  <p className="datadetails">{data.details}</p>
                  </div>
              <div className="date"><p>{data.date}</p></div>
              </div>
              )
          })}
          </div>
          
          </> 
        )
    
}

export default Cards