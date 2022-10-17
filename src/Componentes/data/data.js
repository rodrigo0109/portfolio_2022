import Countries from '../../videos/card_countries.mp4'
import FreeForest from '../../videos/card_freeforest.mp4'
import Weedical from '../../videos/weedical_portfolio.mp4'
import CountriesImg from '../../images/countries.png'
import FreeForestImg from '../../images/freeforest.png'
import WeedicalImg from '../../images/weedical.png'
import Gianfranco from '../../images/devs/gian.jpeg'
import Flor from '../../images/devs/flor.jpeg'
import Martin from '../../images/devs/martin.jpeg'

export const projects = [
    {
        title: 'Free Forest',
        titleEs: 'Free Forest',
        text: 'Development of a complete CRUD on a fictitious video game. Made as a group with four other developers. Scrum methodology was used together with Trello, Figma, AWS and Docker. My work was oriented to the Front-end part and end-to-end testing. Created with React, Redux, Node, Express, Sequelize, Sass, Jest, Cypress, AWS',
        textEs: 'Desarrollo de un CRUD completo sobre un videojuego ficticio. Hecho en grupo con otros cuatro desarrolladores. Se utilizó la metodología Scrum junto con Trello, Figma, AWS y Docker. Mi trabajo estuvo orientado a la parte de Front-end y testing extremo a extremo. Creado con React, Redux, Node, Express, Sequelize, Sass, Jest, Cypress, AWS',
        video: FreeForest,
        img: FreeForestImg,
        gitHub: 'https://github.com/orgs/delosandesdevs/repositories',
        demo: 'https://www.delosandes.xyz/'
    },
    {
        title: 'Weedical Store',
        titleEs: 'Weedical Store',
        text: 'Development of a complete ecommerce on the sale of medicinal cannabis oils. Made as a group with five other developers. Scrum methodology was used together with Trello. My work was oriented to the Front-end side. Created with React, Redux, Node, Express, Sequelize, Sass and other integrations',
        textEs: 'Desarrollo de un ecommerce completo de venta de aceites de cannabis medicinal. Hecho en grupo con otros cinco desarrolladores. Se utilizó la metodología Scrum junto con Trello. Mi trabajo estuvo orientado al lado del Front-end. Creado con React, Redux, Node, Express, Sequelize, Sass y otras integraciones',
        video: Weedical,
        img: WeedicalImg,
        gitHub: 'https://github.com/Proyecto-Final-psg',
        demo: 'https://weedical.netlify.app/'
    },
    {
        title: 'Countries',
        titleEs: 'Países',
        text: 'Development of an application on countries, where you can create tourist activities. This was created as an individual evaluation of the soyHenry bootcamp. Created with React, Redux, Node, Express, Sequelize and pure Css',
        textEs: 'Desarrollo de una aplicación sobre países, donde se pueden crear actividades turísticas. Esto fue creado como una evaluación individual del campo de entrenamiento soyHenry. Creado con React, Redux, Node, Express, Sequelize y Css puro',
        video: Countries,
        img: CountriesImg,
        gitHub: 'https://github.com/rodrigo0109/PI-Countries-PT-05',
        demo: 'https://countries-rodrigo-perez.netlify.app'
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