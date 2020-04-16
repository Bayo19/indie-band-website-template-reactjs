import React, {useRef, useEffect} from "react";
import {TweenMax, Power3} from 'gsap'

// Style
import '../components/Ticket/tickets.css'

// Components
import Tickets from '../components/Ticket/Tickets.jsx'
import Footer from "../components/Footer/Footer";

const Shows = () => {
    let headerAnime = useRef(null)
    
    useEffect(function(){
      TweenMax.from(headerAnime, .90, {opacity: 0, ease: Power3.easeIn})
    }, [])
    
      return (

        <div>
          <div className="content">
            <p ref={el => headerAnime = el} className='TicketHeaderTitle'>Upcoming Dates</p>
            <Tickets />
            <Footer />
          </div>
        </div>
      )
      
    }
    
    export default Shows