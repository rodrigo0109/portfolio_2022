import React, { useState } from 'react'
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { testimonial } from '../data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Contact.css'
import { useNav } from '../../hooks/useNav';

const Contact = ({language}) => {

    const contactRef = useNav('Contact')

    SwiperCore.use([Autoplay])
    const [input, setInput] = useState({
        name: '',
        email: '',
        textarea: ''
    })
    const [error, setError] = useState(false)

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        let cond_name = /^[aA-zZ]{2,20}$/;
        let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (e.target.name === 'name' && cond_name.test(e.target.value) === true) {
            setError(false)
        }
        else if (e.target.name === 'name' && cond_name.test(e.target.value) === false) {
            setError(true)
        }
        if (e.target.name === 'email' && cond_email.test(e.target.value) === true) {
            setError(false)
        }
        else if (e.target.name === 'email' && cond_email.test(e.target.value) === false) {
            setError(true)
        }
    }

    return (
        <div ref={contactRef} className='contact' id='contact' >
            <div className='contact_container' data-aos="fade-right" data-aos-duration="2000">
                <div className='form_container'>
                    {
                        language === 'EN' ?
                        <h1>Let´s talk</h1>
                        :
                        <h1>Hablemos</h1>
                    }
                    <form className='form' method="POST" id="form" name="contact-form" data-netlify='true'>
                        {
                            <span className='error-message'>{error ? 'INVALID NAME OR EMAIL' : ''}</span>
                        }
                        <input type="hidden" name="form-name" value="contact-form" />
                        <input className='field' type="text" placeholder={language === 'EN' ? 'Your name' : 'Tu nombre' } name='name' value={input.name} onChange={handleInputChange} autoComplete='off' />
                        <input className='field' type="email" placeholder={language === 'EN' ? 'Your email' : 'Tu email' } name='email' value={input.email} onChange={handleInputChange} autoComplete='off' />
                        <textarea name='message' type="text" placeholder={language === 'EN' ? 'Your message' : 'Tu mensaje' } />
                        <input type="submit" className="btn_send" value={language === 'EN' ? 'Send' : 'Enviar' } disabled={error} />
                    </form>
                </div>
                <section className='section'>
                    <Swiper className='testimonial'
                        modules={[Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        data-aos="fade-left"
                        autoplay={{ delay: 4000 }}
                        loop
                    >
                        {
                            testimonial.map((t, i) => (
                                <SwiperSlide
                                    className='testimonial_container'
                                    key={i}
                                >
                                    <div className='profile_container'>
                                        <img src={t.img} alt={t.name}/>
                                    </div>
                                    <div className='testimonial_text'>
                                        <p className='testimonial_name'>{t.name}</p>
                                        <p>{language === 'EN' ? t.text : t.textEs}</p>
                                    </div>
                                    <div className='testimonial_icons'>
                                        <a href={t.github} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                                        <a href={t.linkedin} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </section>
            </div>
        </div>
    )
}

export default Contact