import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'

const ProjectsItem = ({ index, img, title, description, link }) => {
    const [showScrollbar, setShowScrollbar] = useState(false)
    const itemRef = useRef();

    useEffect(() => {
        if (itemRef.current.clientHeight > 132) {
            setShowScrollbar(true)
        } else {
            setShowScrollbar(false)
        }
    }, []);

    return (
        <motion.div className='projects_item' initial={{ opacity: 0, translateY: 50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 0.3, delay: index * 0.2 }}>
            <img src={img} alt='' className='item_img' />
            <div className={`${showScrollbar ? 'projects_desc_overflow' : 'projects_desc'}`} onClick={() => window.open(link, "_blank")}>
                <h3 className='item_title'>{title}</h3>
                <div className='item_description'>
                    <p ref={itemRef}>{description}</p>
                </div>
            </div>
        </motion.div>
        // <div className='projects_item'>
        //     <img src={img} alt='' className='item_img' />
        //     <div className={`${showScrollbar ? 'projects_desc_overflow' : 'projects_desc'}`} onClick={() => window.open(link, "_blank")}>
        //         <h3 className='item_title'>{title}</h3>
        //         <div className='item_description'>
        //             <p ref={itemRef}>{description}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProjectsItem