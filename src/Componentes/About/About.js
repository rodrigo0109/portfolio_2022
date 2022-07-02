import React from 'react'
import Image from '../../images/work.png'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='text_container'>
        <h1>About</h1>
        <p>Hi, I´m Rodrigo and I am 28 years old. I am a Full Stack Developer from Buenos Aires, Argentina and currently i'm studying Systems Analyst at IRSO (Raúl Scalabrini Ortiz Institute). Since I graduated from school as an electronic technician I was interested in programming, especially with Javascript.</p>
        <div className='img_container'>
          <img src={Image} alt="about"/>
        </div>
      </div>
    </div>
  )
}

export default About