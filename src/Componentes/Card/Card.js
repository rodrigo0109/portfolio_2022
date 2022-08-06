import React from 'react'
import './Card.css'

const Card = ({title, titleEs, text, textEs, video, img, gitHub, demo, language}) => {

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
              <p>{language === 'EN' ? text : textEs}</p>
            </div>
            <div className='btn_container'>
                <a href={gitHub} target='_blank' rel="noopener noreferrer" className='btn_code'>GitHub</a>
                <a href={demo} target='_blank' rel="noopener noreferrer" className='btn_demo'>{language === 'EN' ? 'Live Demo' : 'Ver Demo'}</a>
            </div>
        </div>
    </div>
  )
}

export default Card