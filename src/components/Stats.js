import React from 'react'
import { stats } from '../data'
import { motion } from 'framer-motion'

const Stats = () => {
    return (
        <>
            {stats.map(({ number, title }, index) => {
                return (
                    <motion.div className='stats_box' key={index} initial={{ opacity: 0, translateX: 50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.4, delay: index * 0.2 }}>
                        <h3 className='stats_number'>{number}</h3>
                        <p className='stats_title'>{title}</p>
                    </motion.div>
                )
            })}
        </>
    )
}

export default Stats