import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import addNotification from 'react-push-notification'
import AOS from "aos";
import logo from '../../assets/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion, Variants } from 'framer-motion'
import "aos/dist/aos.css";
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4v93esg', 'template_t9n2wtr', form.current, 'zR8SkdISOcD856CJ8')
            .then((result) => {
                console.log(result.text);
                addNotification({
                    title: 'Message Sent Successfully!',
                    message: 'Your message has been sent successfully. Thank you for reaching out! I will reply to your email as soon as possible.',
                    duration: 10000,
                    icon: logo,
                    native: true,
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    const parentVariant = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
            },
        },
    };

    const childVariant = {
        initial: { opacity: 0, translateX: -50 },
        animate: { opacity: 1, translateX: 0 },
        transition: { duration: 0.3 },
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section className='contact section'>
            <h2 className='section_title' data-aos='fade-down' data-aos-duration="800">
                Get In <span>Touch</span>
            </h2>

            <div className='contact_container container grid'>
                <div className='contact_body'>
                    <h3 className='contact_title' data-aos='fade-up' data-aos-duration="800">Don't be shy!</h3>
                    <p className='contact_description' data-aos='fade-up' data-aos-duration="800">Feel free to get in touch with me. I'm always open to any projects or job vacancies available.</p>

                    <div className='contact_info' data-aos='fade-up' data-aos-duration="800">
                        <div className='info_item'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div>
                                <span className='info_title'>My E-mail</span>
                                <h4 className='info_desc'>jasontandiono.tech@gmail.com</h4>
                            </div>
                        </div>
                        <div className='info_item'>
                            <FontAwesomeIcon icon={faSquarePhone} />
                            <div>
                                <span className='info_title'>My Phone Number</span>
                                <h4 className='info_desc'>+6285920760511</h4>
                            </div>
                        </div>
                    </div>

                    <motion.div className='contact_socials' variants={parentVariant} initial='initial' animate='animate'>
                        <motion.a href='https://www.instagram.com/jas_tandiono/?hl=en' target='_blank' className='contact_socials_link' variants={childVariant}>
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </motion.a>
                        <motion.a href='https://www.linkedin.com/in/jason-tandiono/' target='_blank' className='contact_socials_link' variants={childVariant}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </motion.a>
                        <motion.a href='https://github.com/JasonJT01' target='_blank' className='contact_socials_link' variants={childVariant}>
                            <FontAwesomeIcon icon={faGithub} />
                        </motion.a>
                    </motion.div>
                </div>

                <form className='contact_form' ref={form} onSubmit={sendEmail} data-aos='zoom-in' data-aos-duration="800">
                    <div className='form_input_group'>
                        <div className='form_input_div'>
                            <input type='text' placeholder='Your Name' className='form_control' name='user_name' autoComplete='off'></input>
                        </div>
                        <div className='form_input_div'>
                            <input type='email' placeholder='Your E-mail' className='form_control' name='user_email' autoComplete='off'></input>
                        </div>
                        <div className='form_input_div'>
                            <input type='text' placeholder='Your Subject' className='form_control' name='subject' autoComplete='off'></input>
                        </div>
                    </div>
                    <div className='form_input_div'>
                        <textarea placeholder='Your Message' className='form_control textarea' name='message' autoComplete='off'></textarea>
                    </div>
                    <button className='button' type='submit'>
                        Send Message <span className='button_icon contact_button_icon'><FontAwesomeIcon icon={faPaperPlane} /></span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact