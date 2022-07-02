import React, { useState } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Profile1 from '../../images/profile.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Contact.css'

const Contact = () => {

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

    const testimonial = [
        {
            name: 'Rodrigo',
            text: "sasd asd asd dasd sd  dsda sd ds ds adsd d sadasd d sd asd",
            github: 'https://github.com/rodrigo0109',
            linkedin: 'https://linkedin.com/in/rodrigo-perez-54073314b'
        },
        {
            name: 'Rodrigo',
            text: "sasd asd asd dasd sd  dsda sd ds ds adsd d sadasd d sd asd",
            github: 'https://github.com/rodrigo0109',
            linkedin: 'https://linkedin.com/in/rodrigo-perez-54073314b'
        }
    ]

    return (
        <div className='contact' id='contact'>
            <div className='contact_container'>
                <div className='form_container'>
                    <h1>Contact Me</h1>
                    <form className='form' method="POST" id="form" name="contact" netlify='true'>
                        {
                            <span className='error-message'>{error ? 'INVALID NAME OR EMAIL' : ''}</span>
                        }
                        <input className='field' type="text" placeholder='Your name' name='name' value={input.name} onChange={handleInputChange} autoComplete='off' />
                        <input className='field' type="email" placeholder='Your email' name='email' value={input.email} onChange={handleInputChange} autoComplete='off' />
                        <textarea type="text" placeholder='Your message' />
                        <input type="submit" className="btn_send" value="Send" disabled={error} />
                    </form>
                </div>
                <section className='section'>
                    <Swiper className='testimonial'
                        // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={40}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {
                            testimonial.map(({ name, text, github, linkedin }, i) => (
                                <SwiperSlide
                                    className='testimonial_container'
                                    key={i}
                                >
                                    <div className='profile_container'>
                                        <img src={Profile1} alt={name}/>
                                    </div>
                                    <div className='testimonial_text'>
                                        <p className='testimonial_name'>{name}</p>
                                        <p>{text}</p>
                                    </div>
                                    <div className='testimonial_icons'>
                                        <a href={github} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                                        <a href={linkedin} target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
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