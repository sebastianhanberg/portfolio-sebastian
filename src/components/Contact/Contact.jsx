import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { FaSteam } from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sfexxyp', 'template_z4bc7py', form.current, 'user_AGEMUUUPkcS4bEs2s49NQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">

                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>sebastian.hanberg@gmail.com</h5>
                        <a href="mailto:sebastian.hanberg@gmail.com">Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/sebastian-h%C3%A5nberg-03051891/" target="_blank"><BsLinkedin className='contact__option-icon' /></a>
                    </article>

                    <article className='contact__option'>
                        <h4>Github</h4>
                        <a href="https://github.com/sebastianhanberg" target="_blank"><ImGithub className='contact__option-icon' /></a>
                    </article>


                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact