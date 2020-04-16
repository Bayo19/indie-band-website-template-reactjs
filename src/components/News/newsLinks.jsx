import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

// JSON
import NewsData from './news.json'

// Style
import './newslink.css'

const NewsLink = () => {
    let newsAnime = useRef(null)

    useEffect(function(){
        TweenMax.from(newsAnime, .9, {opacity: 0, ease: Power3.easeIn})
    },[])

    return (
        <>
        
        <div ref={el => newsAnime = el} className="newslinkcontainer">
        {NewsData.map(function(newsdata){
            return (
                <div  key={newsdata.id} className="newsCard">
                    <div className="newsImage" style={{backgroundImage: `url(${newsdata.image})`}}></div>
                    
                    <div className="newsText">
                        <div className="newsTitleCont"><p className='newsTitle'>{newsdata.title}</p></div>
                        <div className="newsInfo"><p className="newsDetails">{newsdata.details}</p></div>
                        <div className="newsDate"><p>{newsdata.date}</p></div>
                    </div>
                    
                </div>
            )
        })}
        </div>

        </>
    )

}

export default NewsLink