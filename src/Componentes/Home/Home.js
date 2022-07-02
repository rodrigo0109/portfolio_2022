import About from '../About/About'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'

import './Home.css'

const Home = () => {

    return (
        <div className='home' id='/'>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Contact />
        </div>

    )
}
export default Home





