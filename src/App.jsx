import React, { useEffect } from 'react'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Lenis from 'lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    <div>
      <div className='pt-[4.75rem lg:pt-[5.25rem] overflow-hidden] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </div>
  )
}

export default App
