import React, { useRef, useEffect } from 'react'
import { skills } from '../data'
import { motion, useInView, useAnimation } from 'framer-motion'

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '250px 0px' });
    const controlAnimation = useAnimation();

    useEffect(() => {
        if (isInView) {
            controlAnimation.start('visible');
        }
    }, [isInView]);

    return (
        <>
            {skills.map(({ title, level }, index) => {
                return (
                    <motion.div ref={ref} className='skills_box' key={index} variants={{ hidden: { opacity: 0, translateY: -50 }, visible: { opacity: 1, translateY: 0 } }} initial='hidden' animate={controlAnimation} transition={{ duration: 0.3, delay: index * 0.15 }}>
                        <div className={level === 'Beginner' ? 'level_box beginner_level' : (level === 'Intermediate' ? 'level_box intermediate_level' : 'level_box advanced_level')}>{level}</div>
                        <h3 className='skills_title'>{title}</h3>
                    </motion.div>
                )
            })}
        </>
    )
}

export default Skills