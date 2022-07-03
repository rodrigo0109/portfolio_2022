import React from 'react'
import Card from '../Card/Card'
import { projects  } from '../data/data'
import './Experience.css'

const Experience = () => {
  return (
    <div className='experience' id='experience' >
      <div className='cards_container' data-aos="fade-up" data-aos-duration="2000">
        <h1>Experience</h1>
        <div className='cards'>
          {
            projects.length > 0 && 
            projects.map( (c,i) => (
              <Card
                key={i}
                title={c.title}
                text={c.text} 
                video={c.video} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience