import React, { useRef, useEffect } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { TweenMax, Power3 } from 'gsap'

// Style
import './index.css';

// Components
import Nav from './components/Nav/Nav'

// Pages
import Home from './pages/Home'
import News from './pages/News'
import Shows from './pages/Shows'
import About from './pages/About'
import Contact from './pages/Contact'