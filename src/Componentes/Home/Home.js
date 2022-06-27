import About from '../About/About'
import Experience from '../Experience/Experience'
import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import './Home.css'
//import { useSelector } from 'react-redux'

const Home = () => {
    //const state = useSelector(state => state.data)
    return (
        <div className='home'>
            <Hero />
            <About />
            <Skills />
            <Experience />
        </div>

    )
}
export default Home





