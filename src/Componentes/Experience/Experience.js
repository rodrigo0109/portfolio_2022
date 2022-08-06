import React from 'react'
import Card from '../Card/Card'
import { projects } from '../data/data'
import SwiperCore, { Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Experience.css'
import { useNav } from '../../hooks/useNav';

const Experience = ({ language }) => {
  SwiperCore.use([Autoplay])

  const experienceRef = useNav('Experience')

  return (
    <div ref={experienceRef} className='experience' id='experience' >
      <div className='cards_container' data-aos="fade-up" data-aos-duration="2000">
        {
          language === 'EN' ?
            <h1>Projects</h1>
            :
            <h1>Proyectos</h1>
        }
        {
          window.innerWidth > 450 ?
            <div className='cards'>
              {
                projects.length > 0 &&
                projects.map((c, i) => (
                  <Card
                    key={i}
                    title={c.title}
                    titleEs={c.titleEs}
                    text={c.text}
                    textEs={c.textEs}
                    video={c.video}
                    gitHub={c.gitHub}
                    demo={c.demo}
                    language={language}
                  />
                ))
              }
            </div>
            :
            <div className='cards'>
              {
                projects.length > 1 &&
                <Swiper className='mySwiper'
                  modules={[Pagination, A11y]}
                  scrollbar={{ draggable: true }}
                  slidesPerView={1}
                  autoplay={{ delay: 3000 }}
                  loop
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                >
                  {projects && projects.map((c, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Card
                          title={c.title}
                          titleEs={c.titleEs}
                          text={c.text}
                          textEs={c.textEs}
                          video={c.video}
                          gitHub={c.gitHub}
                          demo={c.demo}
                          language={language}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Experience