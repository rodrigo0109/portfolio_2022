import React from 'react'
import Image from '../../images/pic2.png'
import Resume from '../../file/resume.pdf'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'  >
      <div className='language'>
        <button>EN</button>
        <button>ES</button>
      </div>
      <div className='hero_intro_container' data-aos="fade-up">
        <h1>Hi, i´m Rodrigo Pérez</h1>
        <div className='subtitle-action_container'>
          <h3>Full Stack Developer</h3>
          <a href={Resume} download="Resume_Rodrig_Perez.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <div className='img_intro_container' data-aos="fade-up">
        <img src={Image} alt='Rodrigo Perez'/>
      </div>
    </div>
  )
}

export default Hero