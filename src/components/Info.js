import React from 'react'
import { personalInfos } from '../data'
import { motion } from 'framer-motion'

const Info = () => {
    return (
        <>
            {personalInfos.map(({ title, description }, index) => {
                return (
                    <motion.li className='info_item' key={index} initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }}>
                        <span className='info_title'>{title}</span>
                        <span className='info_description'>{description}</span>
                    </motion.li>
                )
            })}
        </>
    )
}

export default Info