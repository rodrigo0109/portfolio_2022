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
              <p>
                Hi, I'm Rodrigo, Full Stack Developer and I work as a FrontEnd developer at <a className='link' href='https://www.stamm.bio/' target='_blank'>Stämm Biotech</a>.
                 I consider myself a responsible, communicative person with good performance both for teamwork and individually. 
                 My goal is to find new challenges to grow as a professional, contributing my knowledge and learning from my work team.
                I am currently a first-year Systems Analyst student. If you want to know more, I invite you to write to me in the contact section.
              </p>
            </>
            :
            <>
              <h1>Sobre mí</h1>
              <p>
                Hola, soy Rodrigo, Desarrollador Full Stack y trabajo como desarrollador FrontEnd para <a className='link' href='https://www.stamm.bio/' target='_blank'>Stämm Biotech</a>. 
                Me considero una persona responsable, comunicativa y con buen desempeño tanto para el trabajo en equipo como individual. 
                Mi objetivo es encontrar nuevos desafíos para crecer como profesional, aportando mis conocimientos y aprendiendo de mi equipo de trabajo. 
                Actualmente soy estudiante de primer año de Analista de Sistemas. Si quieres saber más te invito a que me escribas en la sección de contacto. 
              </p>
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