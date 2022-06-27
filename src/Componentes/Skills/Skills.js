import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills_container'>
        <h1>Skills</h1>

        <div className='tech_container'>
          <div className='skill_title'>
            <div></div>
            <p>Frontend</p>
          </div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faHtml5} /><p>HTML</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faCss3} /><p>CSS</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faJs} /><p>JavaScript</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faReact} /><p>React</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faBootstrap} /><p>Bootstrap</p></div>
        </div>

        <div className='tech_container'>
          <div className='skill_title'>
            <div></div>
            <p>Backend</p>
          </div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faHtml5} /><p>NodeJs</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faCss3} /><p>PostgresSQL</p></div>
          <div className='tech'><FontAwesomeIcon className='icon' icon={faJs} /><p>JavaScript</p></div>
        </div>
      </div>
    </div>
  )
}

export default Skills