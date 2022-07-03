import React from 'react'
import './Card.css'

const Card = ({title, titleEs, text, textEs, video, language}) => {

  return (
    <div className='card'>
        <video autoPlay loop muted>
            <source src={video} />
        </video>
        <div className='card_content'>
            <div className='text_container-card'>
              <h3>{language === 'EN' ? title : titleEs}</h3>
              <p>{language === 'EN' ? text : textEs}</p>
            </div>
            <div className='btn_container'>
                <button className='btn_code'>GitHub</button>
                <button className='btn_demo'>{language === 'EN' ? 'Live Demo' : 'Ver Demo'}</button>
            </div>
        </div>
    </div>
  )
}

export default Card