import { useState } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'

import './Home.css'

const Home = () => {

    const [language, setLanguage] = useState('EN')

    return (
        <div className='home'>
            <Hero language={language} setLanguage={setLanguage} />
            <About language={language} />
            <Skills language={language} />
            <Experience language={language} />
            <Contact language={language} />
        </div>

    )
}
export default Home





