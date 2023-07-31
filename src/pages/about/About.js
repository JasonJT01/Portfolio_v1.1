import React, { useState, useEffect, useRef } from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import Skills from '../../components/Skills'
import Resume from '../../components/Resume'
import CV from '../../assets/JasonTandiono_CV.pdf'
import AOS from "aos";
import { motion, useInView, useAnimation } from 'framer-motion'
// import ReactTyped from 'react-typed';
import { resume } from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faArrowDown, faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import "aos/dist/aos.css";
import './about.css'

const About = () => {
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollTime, setLastScrollTime] = useState(Date.now());
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isPageScrollable, setIsPageScrollable] = useState(false);

    const skillsRef = useRef(null);
    const resumeRef = useRef(null);
    const isSkillsInView = useInView(skillsRef, { once: true, margin: '-50px 0px' });
    const isResumeInView = useInView(resumeRef, { once: true, margin: '-50px 0px' });
    const skillsAnimation = useAnimation();
    const resumeAnimation = useAnimation();

    useEffect(() => {
        if (isSkillsInView) {
            skillsAnimation.start('visible');
        }
        if (isResumeInView) {
            resumeAnimation.start('visible');
        }
    }, [isSkillsInView, isResumeInView]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        let timer;

        const handleScroll = () => {
            setScrolling(true);
            setLastScrollTime(Date.now());
            setIsAtBottom(
                window.innerHeight + window.scrollY >= document.body.offsetHeight
            );
            clearTimeout(timer);
            timer = setTimeout(() => {
                setScrolling(false);
            }, 10000); // 10 seconds delay for "not scrolling" detection
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Check if 10 seconds have passed since the last scroll
        const interval = setInterval(() => {
            const currentTime = Date.now();
            if (!scrolling && currentTime - lastScrollTime >= 10000 && !isAtBottom) {
                setScrolling(false);
            }
        }, 1000); // Check every second for 10 seconds duration

        return () => {
            clearInterval(interval);
        };
    }, [scrolling, lastScrollTime, isAtBottom]);

    const handleScrollToBottom = () => {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth', // Use 'auto' for instant scrolling without smooth animation
        });
    };

    useEffect(() => {
        let isScrollable = false;

        const checkScrollable = () => {
            isScrollable = document.body.scrollHeight > document.documentElement.clientHeight;
            if (isScrollable) {
                setIsPageScrollable(true)
            } else {
                setIsPageScrollable(false)
            }
            // Use the isPageScrollable variable as needed, e.g., pass it to other functions or use it in your logic
            console.log('Is page scrollable:', isPageScrollable);
        };

        // Check if the page is scrollable on initial mount
        checkScrollable();

        // Recheck if the page is scrollable on window resize
        window.addEventListener('resize', checkScrollable);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', checkScrollable);
        };
    }, []);

    let className;
    if (window.innerWidth <= 768) {
        className = 'resume_container'
    } else {
        className = 'resume_container grid'
    }

    return (
        <main className='section container'>
            <div className={isPageScrollable ? (isAtBottom || (scrolling && !isAtBottom) ? 'hide_scroll' : 'scroll_down animate-bounce') : 'hide_scroll'} onClick={handleScrollToBottom}>
                {/* <FontAwesomeIcon icon={faArrowDown} className='arrow_down_icon' /> */}
                {/* <FontAwesomeIcon icon={faChevronDown} className='chevron_down_icon' /> */}
                <FontAwesomeIcon icon={faAnglesDown} className='chevron_down_icon' />
            </div>
            <section className='about'>
                <h2 className='section_title' data-aos='fade-down' data-aos-duration="800">
                    About <span>Me</span>
                </h2>

                <div className='about_container grid'>
                    <div className='about_info'>
                        <motion.h3 className='section_subtitle' initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.4 }}>Personal Infos</motion.h3>

                        <ul className='info_list grid'>
                            <Info />
                        </ul>

                        <a href={CV} download='' className='button' data-aos='fade-right' data-aos-duration='800'>
                            Download CV
                            <span className='button_icon'>
                                <FontAwesomeIcon icon={faDownload} />
                            </span>
                        </a>
                    </div>

                    <div className='vertical_separator'></div>

                    <div className='stats grid'>
                        <Stats />
                    </div>
                </div>
            </section>

            <div className='separator'></div>

            <section className='skills'>
                <motion.h3 ref={skillsRef} className='section_subtitle subtitle_center' variants={{ hidden: { opacity: 0, translateY: -50 }, visible: { opacity: 1, translateY: 0 } }} initial='hidden' animate={skillsAnimation} transition={{ duration: 0.5 }}>My Skills</motion.h3>
                <div className='skills_container grid'>
                    <Skills />
                </div>
            </section>

            <div className='separator'></div>

            <section className='resume'>
                <motion.h3 ref={resumeRef} className='section_subtitle subtitle_center' variants={{ hidden: { opacity: 0, translateY: -50 }, visible: { opacity: 1, translateY: 0 } }} initial='hidden' animate={resumeAnimation} transition={{ duration: 0.5 }}>Experience & Education</motion.h3>
                <div className={className}>
                    <div className='resume_data experience_resume_data'>
                        {resume.map((res, i) => {
                            if (res.category === 'experience') {
                                return <Resume key={res.id} index={i} {...res} />
                            }
                        })}
                    </div>

                    <div className='resume_data'>
                        {resume.map((res, i) => {
                            if (res.category === 'education') {
                                return <Resume key={res.id} index={i} {...res} />
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About