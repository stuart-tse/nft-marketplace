import React from 'react'

//Internal Import 
import Style from '../styles/index.module.css'
import { HeroSection } from '../components/ComponentsIndex'

const Home = () => {
  return (
    <div className={Style.homepage}>
      <HeroSection />
    </div>
  )
}

export default Home