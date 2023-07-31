import React, { useState, useEffect } from 'react'
import ProjectsItem from '../../components/ProjectsItem'
import AOS from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { projectsItem } from '../../data'
import "aos/dist/aos.css";
import './projects.css'

const Projects = () => {
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollTime, setLastScrollTime] = useState(Date.now());
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isPageScrollable, setIsPageScrollable] = useState(false);

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

        return () => clearInterval(interval);
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

    return (
        <section className='projects section'>
            <div className={isPageScrollable ? (isAtBottom || (scrolling && !isAtBottom) ? 'hide_scroll' : 'scroll_down animate-bounce') : 'hide_scroll'} onClick={handleScrollToBottom}>
                {/* <FontAwesomeIcon icon={faArrowDown} className='arrow_down_icon' /> */}
                <FontAwesomeIcon icon={faAnglesDown} className='chevron_down_icon' />
            </div>
            <h2 className='section_title' data-aos='fade-down' data-aos-duration="800">My <span>Projects</span></h2>

            <div className='projects_container container grid'>
                {projectsItem.map((item, i) => {
                    return (
                        <ProjectsItem key={item.id} index={i} {...item} />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects