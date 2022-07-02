import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faWrench, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Nav.css'

const Nav = () => {

  const [active, setActive] = useState('/')

  return (
    <div className='nav'>
      <ul className='nav-menu'>
        <li className={active === '/' ? 'nav-item-active' : 'nav-item'}>
          <Link to="/"  onClick={() => setActive('/')} spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faHouse} /></Link>
        </li>
        <li  className={active === 'about' ? 'nav-item-active' : 'nav-item'}>
          <Link to="about" onClick={() => setActive('about')} spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faUser} /></Link>
        </li>
        <li  className={active === 'skills' ? 'nav-item-active' : 'nav-item'}>
          <Link to="skills" onClick={() => setActive('skills')} spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faWrench} /></Link>
        </li>
        <li className={active === 'experience' ? 'nav-item-active' : 'nav-item'}>
          <Link to="experience"  onClick={() => setActive('experience')} spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faBriefcase} /></Link>
        </li>
        <li  className={active === 'contact' ? 'nav-item-active' : 'nav-item'}>
          <Link to="contact" onClick={() => setActive('contact')} spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faEnvelope} /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav