import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import {TweenMax, Power3} from 'gsap'

// Icons
import {FaGripLines} from 'react-icons/fa'


//Style
import "./Nav.css";

const Nav = () => {
    const [toggleState, setToggleState] = useState(false)
  
    const toggle = () => {
      setToggleState(toggleState === false ? true : false)
    }
  
    let logoAnime = useRef(null)
    
    let listAnime = useRef(null)
      useEffect(function(){
          TweenMax.staggerFrom(logoAnime, .28, {opacity: 0, y: 15, ease:Power3.easeInOut},.2)
          TweenMax.from(listAnime, .79, {opacity: 0, ease: Power3.easeIn})
      })
  
  
    return (
      <div className="headerContainer">
        <header>
        <div ref={el => logoAnime = el} className="logo">
          <Link to="/">stein</Link>
        </div>
  
        <nav>        
          <p className="fa fa-bars" onClick={toggle}><FaGripLines/></p>
          <ul ref={el => listAnime = el} className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" onClick={toggle} to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink activeClassName="active" onClick={toggle} to="/news">
              <li>NEWS</li>
            </NavLink>
            <NavLink activeClassName="active" onClick={toggle} to="/shows">
              <li>SHOWS</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about" onClick={toggle}>
              <li>BIO</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact" onClick={toggle}>
              <li>CONTACT</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      </div>
      
    )
  }
  
  export default Nav