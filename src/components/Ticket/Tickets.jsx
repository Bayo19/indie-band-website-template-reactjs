import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

// JSON
import TicketData from './Tickets.json'

// Style
import './tickets.css'

const Ticket = () => {
    
    let tickAnime = useRef(null)

    useEffect(function(){
      TweenMax.from(tickAnime, .90, {opacity: 0, ease: Power3.easeIn})  
    }, [])

    return (
        <>

        <div ref={el => tickAnime = el} className="ticketContainer">
            {TicketData.map(function(data){
                return (
                    <div className="theTicket">
                        <div className="left">
                        <p className='ticketDate'>{data.date}</p>
                        <p className="venue">{data.venue}</p>
                        </div>
                        <div className="right">
                        <p className='location'>{data.location}</p>
                            <p className='ticketButton'>Tickets</p>
                        </div>
                    </div>
                )
            })}
        </div>

        </>
    )
}

export default Ticket