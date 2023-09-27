import React from 'react'
import NavBar from "../components/NavBar"
import Carousel from "../components/Carousel"
import HowItWorks from "../components/HowItWorks"
import AboutUs from '../components/AboutUs'
import Counter from '../components/Counter'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <HowItWorks/>
      <AboutUs/>
      <Counter/>
    </div>
  )
}

export default Home
