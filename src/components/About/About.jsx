import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about-1000.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={MeAbout} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ years</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>2 & counting</small>
                        </article>

                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                            <br />
                            <small>& counting</small>
                        </article>
                    </div>

                    <p>
                        Newly graduated front end developer-student who always been interested in IT, web development and system development.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk!</a>

                </div>
            </div>

        </section>
    )
}

export default About