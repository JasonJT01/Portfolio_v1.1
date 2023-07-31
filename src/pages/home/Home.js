import React, { useEffect } from 'react'
import ReactTyped from 'react-typed';
import Profile from '../../assets/profile.jpeg'
import AOS from "aos";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "aos/dist/aos.css";
import './home.css'

const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <section className='home home_tab grid'>
            <img data-aos='zoom-in' data-aos-duration="1300" src={Profile} alt='' className='home_profile_img' />

            <div className='home_body'>
                <div className='home_content'>
                    {/* <h1 className='home_title'>
                        <span>Hi! I'm Jason Tandiono.</span> Web Developer
                    </h1> */}
                    <h1 className='home_title' data-aos='fade-left' data-aos-duration="1600">
                        Hi! I'm Jason Tandiono. <br></br>
                        <ReactTyped
                            strings={["Web Developer"]}
                            typeSpeed={130}
                            loop
                            backSpeed={50}
                            cursorChar="|"
                            showCursor={true}
                        />
                    </h1>

                    <p className='home_desc' data-aos='fade-up' data-aos-duration="1600">
                        I am a fresh graduate web developer who is looking for work experience as a front-end developer. I have experience in creating and designing website interfaces. I also enjoy working with people and learning new things that are related to technology.
                    </p>

                    <Link to='/about' className='button' data-aos='fade-up' data-aos-duration="1600">
                        More about me{' '}
                        <span className='button_icon'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </Link>
                </div>

                <div className='color_block'></div>
            </div>
        </section>
    )
}

export default Home