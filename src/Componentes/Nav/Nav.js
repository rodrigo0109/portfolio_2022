import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faWrench, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Nav.css'
import { NavContext } from '../context/NavContext';

const Nav = () => {

  const { activeLinkId } = useContext(NavContext)

  return (
    <div className='nav'>
      <ul className='nav-menu'>
        <li className={activeLinkId === '/' ? 'nav-item-active' : 'nav-item'}>
          <Link to="/" spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faHouse} /></Link>
        </li>
        <li  className={activeLinkId === 'About' ? 'nav-item-active' : 'nav-item'}>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faUser} /></Link>
        </li>
        <li  className={activeLinkId === 'Skills' ? 'nav-item-active' : 'nav-item'}>
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faWrench} /></Link>
        </li>
        <li className={activeLinkId === 'Experience' ? 'nav-item-active' : 'nav-item'}>
          <Link to="experience" spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faBriefcase} /></Link>
        </li>
        <li  className={activeLinkId === 'Contact' ? 'nav-item-active' : 'nav-item'}>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}><FontAwesomeIcon icon={faEnvelope} /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav