import React, { useEffect, useRef } from 'react'
import parse from 'html-react-parser'
import { motion, useInView, useAnimation } from 'framer-motion'

const Resume = ({ index, icon, date, title, desc }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
    const controlAnimation = useAnimation();

    useEffect(() => {
        if (isInView) {
            controlAnimation.start('visible');
        }
    }, [isInView])

    return (
        <motion.div ref={ref} className='resume_item' variants={{ hidden: { opacity: 0, translateY: -50 }, visible: { opacity: 1, translateY: 0 } }} initial='hidden' animate={controlAnimation} transition={{ duration: 0.3, delay: index * 0.15 }}>
            <div className='resume_icons'>{icon}</div>
            <span className='resume_date'>{date}</span>
            <h3 className='resume_subtitle'>{parse(title)}</h3>
            <p className='resume_description'>{desc}</p>
        </motion.div>
    )
}

export default Resume