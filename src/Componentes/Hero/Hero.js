import React from 'react'
import Image from '../../images/pic2.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero_intro_container'>
        <h1>Hi, i´m Rodrigo</h1>
        <h3>Full Stack Developer</h3>
        <button>Start</button>
      </div>
      <div className='img_intro_container'>
        <img src={Image} />
      </div>
    </div>
  )
}

export default Hero