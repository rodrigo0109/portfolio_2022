import React from 'react'
import Image from '../../images/pic4.png'
import Resume from '../../file/resume.pdf'
import './Hero.css'

const Hero = ({language, setLanguage}) => {

  const handleLanguage = (value) => {
    setLanguage(value)
  }

  return (
    <div className='hero'  >
      <div className='language'>
        <button className={language === 'EN' ? 'btn_active' : 'btn'} onClick={() => handleLanguage('EN')}>EN</button>
        <button className={language === 'ES' ? 'btn_active' : 'btn'} onClick={() => handleLanguage('ES')}>ES</button>
      </div>
      <div className='hero_intro_container' data-aos="fade-up" data-aos-duration="2000">
        {
          language === 'EN' ?
          <h1>Hi, i´m Rodrigo Pérez</h1>
          :
          <h1>Hola, soy Rodrigo Pérez</h1>
        }
        <div className='subtitle-action_container'>
          <h3>Full Stack Developer</h3>
          <a href={Resume} download="Resume_Rodrig_Perez.pdf" target="_blank" rel="noopener noreferrer">{ language === 'EN' ? 'Resume' : 'CV' }</a>
        </div>
      </div>
      <div className='img_intro_container' data-aos="fade-up">
        <img src={Image} alt='Rodrigo Perez'/>
      </div>
    </div>
  )
}

export default Hero