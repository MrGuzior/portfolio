import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Resume from '../Resume/Resume'
import Contact from '../Contact/Contact'
import Timeline from '../Timeline/Timeline'

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
