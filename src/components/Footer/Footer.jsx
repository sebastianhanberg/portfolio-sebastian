import React from 'react'
import './footer.css'
import { ImGithub } from 'react-icons/im'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>SEBASTIAN</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/sebastian-h%C3%A5nberg-03051891/"><BsLinkedin /></a>
                <a href="https://github.com/sebastianhanberg"><ImGithub /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Sebastian Hånberg 2022. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer