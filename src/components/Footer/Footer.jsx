import React from 'react'

// Icons
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaSoundcloud} from 'react-icons/fa'
import {FaSpotify} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

// Style
import './footer.css'

const Footers = () => {
    return (
        <>
        <div className="iconContainer">
        <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><h3 className='iconColor'><FaFacebook /></h3></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" ><h3 className='iconColor'><FaTwitter /></h3></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" ><h3 className='iconColor'><FaInstagram /></h3></a>
        <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer" ><h3 className='iconColor'><FaSoundcloud /></h3></a>
        <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer"><h3 className='iconColor'><FaSpotify /></h3></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><h3 className='iconColor'><FaYoutube /></h3></a>
        </div>
        <p className="footerText">Copyright © LITE All right reserved.</p>
           
        </>
    )
}

export default Footers