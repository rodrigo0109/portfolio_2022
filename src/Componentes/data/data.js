import Countries from '../../videos/card_countries.mp4'
import Weather from '../../videos/card_weather.mp4'
import CountriesImg from '../../images/countries.png'
import WeatherImg from '../../images/weather.png'
import Gianfranco from '../../images/devs/gian.jpeg'
import Flor from '../../images/devs/flor.jpeg'
import Martin from '../../images/devs/martin.jpeg'

export const projects = [
    {
        title: 'Countries',
        titleEs: 'Países',
        text: 'Created with React, Redux, Node, Express, Sequelize and pure Css',
        textEs: 'Creado con React, Redux, Node, Express, Sequelize y Css',
        video: Countries,
        img: CountriesImg,
        gitHub: 'https://github.com/rodrigo0109/PI-Countries-PT-05',
        demo: 'https://countries-rodrigo-perez.netlify.app'
    },
    {
        title: 'Weather',
        titleEs: 'Clima',
        text: 'Created with React, Redux, Node, Express, Sequelize and pure Css',
        textEs: 'Creado con React, Redux, Node, Express, Sequelize y Css',
        video: Weather,
        img: WeatherImg,
        gitHub: 'https://github.com/rodrigo0109/weather',
        demo: 'https://weather-app-rodrigo-perez.netlify.app'
    }
]

export const testimonial = [
    {
        name: 'Gianfranco Gobbi',
        text: `"I was lucky to share projects with Rodrigo, he is a developer who is in every detail and works very well as a team."`,
        textEs: `"Tuve la suerte de compartir proyectos con Rodrigo, es un desarrollador que está en cada detalle y trabaja muy bien en equipo."`,
        img: Gianfranco,
        github: 'https://github.com/GianfrancoGobbi',
        linkedin: 'https://www.linkedin.com/in/gianfranco-gobbi'
    },
    {
        name: 'Florencia Taburelli',
        text: `"Working with Rodrigo is very easy, he generates an environment of support and camaraderie, providing creative ideas and concrete solutions."`,
        textEs: `"Trabajar con Rodrigo es muy fácil, genera un entorno de apoyo y compañerismo, aportando ideas creativas y soluciones concretas."`,
        img: Flor,
        github: 'https://github.com/FlorenciaTaburelli',
        linkedin: 'https://www.linkedin.com/in/florencia-taburelli/'
    },
    {
        name: 'Martin Barreiro',
        text: `"It was a great experience working with Rodrigo, super responsible, great team skills and a great developer."`,
        textEs: `"Fue una gran experiencia trabajar con Rodrigo, super responsable, excelentes habilidades en equipo y un gran desarrollador."`,
        img: Martin,
        github: 'https://github.com/martinjbh',
        linkedin: 'https://www.linkedin.com/in/barreiro-martin'
    }
]