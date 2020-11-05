import React from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Testimonials from './Components/Testimonials'
import Portfolio from './Components/Portfolio'
import Timeline from './Components/Timeline'


const App = () => {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Resume/>
        <Timeline/>
        <Contact/>
        <Footer/>
      </div>
    )
}

export default App
