import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'


// Style
import './headerpic.css'

const HeaderPic = () => {

    let picAnime = useRef(null)

    useEffect(function() {
        TweenMax.from(picAnime, .90, {opacity: 0, ease: Power3.easeIn})  
    }, [])
    
    return (
        <>
        
        <div ref={el => picAnime = el} className="picContainer">
            <div className="headerPic"></div>
        </div>

        </>
    )
}

export default HeaderPic