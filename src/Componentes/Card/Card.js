import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Card.css'

const Card = ({title, titleEs, text, textEs, video, img, gitHub, demo, language}) => {

  const [show, setShow] = useState(false);

  return (
    <div className='card'>
      {
        window.innerWidth > 450 ?
        <video autoPlay loop muted>
            <source src={video} />
        </video>
        :
        <img src={img} alt={language === 'EN' ? title : titleEs} />
      }
        <div className='card_content'>
            <div className='text_container-card'>
              <h3>{language === 'EN' ? title : titleEs}</h3>
              <p className={`text-card${show ? '-show' : ''}`}>{language === 'EN' ? text : textEs}</p>
              <button className='btn-read' onClick={() => { setShow(!show) }}><FontAwesomeIcon icon={show ? faAngleUp : faAngleDown} /></button>
            </div>
            <div className='btn_container'>
              {
                gitHub !== '' &&
                <a href={gitHub} target='_blank' rel="noopener noreferrer" className='btn_code'>GitHub</a>
              }
                <a href={demo} target='_blank' rel="noopener noreferrer" className={`${gitHub === '' ? 'btn_demo_alone' : 'btn_demo'}`}>{language === 'EN' ? 'Live Demo' : 'Ver Demo'}</a>
            </div>
        </div>
    </div>
  )
}

export default Card