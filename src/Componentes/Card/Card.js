import React from 'react'
import Prueba from '../../videos/rain.mp4'
import './Card.css'

const Card = () => {
  return (
    <div className='card'>
        <video autoPlay loop muted>
            <source src={Prueba} />
        </video>
        <div className='card_content'>
            <p>asdasdasdsdsd</p>
            <div className='btn_container'>
                <nutton className='btn_code'>GitHub</nutton>
                <nutton className='btn_demo'>Live Demo</nutton>
            </div>
        </div>
    </div>
  )
}

export default Card