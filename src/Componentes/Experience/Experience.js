import React from 'react'
import Card from '../Card/Card'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience'>
      <div className='cards_container'>
        <h1>Experience</h1>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Experience