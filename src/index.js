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

const App = () => {

  let appAnime = useRef(null)

  useEffect(function(){
    TweenMax.from(appAnime, .99, {opacity: 0, ease: Power3.easeInOut})
  })
  return (
    <>

    <div ref={el => appAnime = el} className="App">
    <Nav />
    <div className="">
      <Route exact={true} path='/' component={Home} />
      <Route exact={true} path='/News' component={News} />
      <Route exact={true} path='/Shows' component={Shows} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Contact' component={Contact}/>
    </div>
    </div>
    
    </>
  )
}

const rootElement = document.getElementById('root')
hydrate(
  <Router>
    <App />
  </Router>, 
  rootElement
)