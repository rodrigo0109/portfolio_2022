import React from 'react'
import Card from '../Card/Card'
import { projects  } from '../data/data'
import './Experience.css'

const Experience = ({language}) => {
  return (
    <div className='experience' id='experience' >
      <div className='cards_container' data-aos="fade-up" data-aos-duration="2000">
        {
          language === 'EN' ?
          <h1>Projects</h1>
          :
          <h1>Proyectos</h1>
        }
        <div className='cards'>
          {
            projects.length > 0 && 
            projects.map( (c,i) => (
              <Card
                key={i}
                title={c.title}
                titleEs={c.titleEs}
                text={c.text} 
                textEs={c.textEs}
                video={c.video} 
                language={language}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Experience