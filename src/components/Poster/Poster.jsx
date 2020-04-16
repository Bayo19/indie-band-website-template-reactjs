import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

//Style
import './poster.css'

const Poster = (props) => {
    
    let first = useRef(null)
    let second = useRef(null)
    let third = useRef(null)

    let postAnime = useRef(null)

    useEffect(function(){
        TweenMax.from(first, .8, {opacity: 0, y: 2, ease: Power3.easeInOut, delay: 1.10})
        TweenMax.from(second, .8, {opacity: 0, y: 2, ease: Power3.easeInOut, delay: 1.45})
        TweenMax.from(third, .8, {opacity: 0, y: 2, ease: Power3.easeInOut, delay: 1.70})
        TweenMax.from(postAnime, .90, {opacity: 0, ease: Power3.easeIn})
    }, [])

    return (
        <>

        <div ref={el => postAnime = el} className='background'>
            <div className='text'>
                <p ref={el => first = el} className='title'>{props.title}</p>
                <p ref={el => second = el}className='albumTitle'>{props.albumTitle}</p>
                <p ref={el => third = el} className='albumDate'>{props.date}</p> 
            </div>
        
        </div>
       
        </>
    )
}

export default Poster