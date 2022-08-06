import React from 'react'
import { useNav } from '../../hooks/useNav'
import Image from '../../images/work.png'
import './About.css'

const About = ({ language }) => {

  const aboutRef = useNav('About')

  return (
    <div ref={aboutRef} className='about' id='about' >
      <div className='text_container' data-aos="fade-up" data-aos-duration="2000">
        {
          language === 'EN' ?
            <>
              <h1>About</h1>
              <p>Hi, I'm Rodrigo, Full Stack Developer. I consider myself a responsible, communicative person with good performance both for
                teamwork as individual. My goal is to get my first opportunity in the IT sector to grow as a professional, contributing my knowledge and learning from my work team. I am currently finishing my first year as a Systems Analyst and concluding the soyHenry bootcamp. If you want to know more I invite you to write me in the contact section.</p>
            </>
            :
            <>
              <h1>Sobre mí</h1>
              <p>¡Hola!, soy Rodrigo, desarrollador Full Stack. Me considero una persona responsable, comunicativa y con buen desempeño tanto para
                el trabajo en equipo como individual.  Mi objetivo es lograr mi primera oportunidad en el sector IT  para crecer como profesional, aportando mis conocimientos y aprendiendo de mi equipo de trabajo. Actualmente estoy finalizando primer año de Analista de Sistemas y concluyendo el bootcamp soyHenry. Si queres saber más te invito a escribirme en la seccion de contacto. </p>
            </>
        }
        <div className='img_container'>
          <img src={Image} alt="about" />
        </div>
      </div>
    </div>
  )
}

export default About