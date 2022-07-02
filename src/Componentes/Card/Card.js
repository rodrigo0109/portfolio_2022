import React from 'react'
import './Card.css'

const Card = ({title, text, video}) => {

  return (
    <div className='card'>
        <video autoPlay loop muted>
            <source src={video} />
        </video>
        <div className='card_content'>
            <div className='text_container-card'>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <div className='btn_container'>
                <button className='btn_code'>GitHub</button>
                <button className='btn_demo'>Live Demo</button>
            </div>
        </div>
    </div>
  )
}

export default Card