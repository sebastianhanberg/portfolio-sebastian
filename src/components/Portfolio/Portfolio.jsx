import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio7.jpg'
import IMG2 from '../../assets/portfolio8.jpg'
import IMG3 from '../../assets/portfolio9.jpg'


const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Exentor',
        undertitle: 'Soon to be done project..',
        github: 'https://github.com/sebastianhanberg/exentor',
        demo: 'https://exentor.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Bokavemdalen Bygg',
        undertitle: 'Soon to be done project..',
        github: 'https://github.com/sebastianhanberg/bokavemdalen-bygg',
        demo: 'https://bokavemdalenbyggab.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Photo By Forsberg',
        undertitle: 'early project for fun',
        github: 'https://github.com/sebastianhanberg/sebastianhanberg.github.io',
        demo: 'https://sebastianhanberg.github.io/'
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, undertitle, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                    <small>{undertitle}</small>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio


