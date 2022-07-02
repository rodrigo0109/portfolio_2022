import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJs, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import Image from '../../images/postgre.png'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills' >
      <div className='skills_container' data-aos="fade-up">
        <h1>Skills</h1>

        <div className='tech_container'>
          <div className='skill_title'>
            <div></div>
            <p>Frontend</p>
          </div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faHtml5} /><p>Html</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faCss3} /><p>Css</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faJs} /><p>JavaScript</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faReact} /><p>React</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faBootstrap} /><p>Bootstrap</p></div>
        </div>

        <div className='tech_container'>
          <div className='skill_title'>
            <div></div>
            <p>Backend</p>
          </div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faNode} /><p>NodeJs</p></div>
          <div className='tech'><img src={Image} alt='postgresql' /><p>PostgreSQL</p></div>
        </div>
      </div>
    </div>
  )
}

export default Skills