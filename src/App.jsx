import React, { useState } from 'react'
import { Navbar, Hero, Title, Programs, About, Campus, Testimonials, Contact, Footer, VideoPlayer } from './Components'

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle="Our PROGRAM" title="What We Offer"/>
           <Programs/>
           <About setPlayState={setPlayState}/>
            <Title subTitle="Gallery" title="Campus photos"/>
            <Campus/>
            <Title subTitle="TESTIMONIALS" title="What Student Says"/>
            <Testimonials/>
            <Title subTitle="Contact us" title="Get in Touch"/>
            <Contact/>
            <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App