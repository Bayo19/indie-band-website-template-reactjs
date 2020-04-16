import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

//Style
import './biotext.css'

const BioText = () => {

    let pAnime = useRef(null)

    useEffect(function(){
        TweenMax.from(pAnime, .90, {opacity: 0, ease: Power3.easeIn, delay: .4})
    },[])

    return (
        <>
        <div ref={el => pAnime = el} className="pContainer">
        <p className='pp'>STEIN is an Australian instrumental rock band known for sublime and emotional compositions, progressive, edgy riffs, and complex rhythms. Widely regarded for their explosive live show and tireless touring in the US, Europe, and Asia, STEIN are one of the most exciting bands to emerge from Australia in the last twenty years.</p>

        <p className='pp'>Entering their 16th year together, the band boasts a tremendous back catalog of five full-length albums and six EPs, including 2009's Let's Have It and 2012's Dream, Hope, Grace, which featured Stephen Rake.</p>

        <p className='pp'>Over the past 16 years, the Australian trio has established itself as one of the most influential groups across a host of subgenres. Though usually referred to by touchstones such as “math-rock” or “post-rock,” STEIN has developed an uncanny ability to fuse their influences into their own unmistakable dialect that defies generic genre classification. Their sixth full length record, Nowhere, will be released on Hoffmann Records digitally on July 5, 2020 and physically on September 6, 2020.</p>
        </div>
        </>
    )
}

export default BioText