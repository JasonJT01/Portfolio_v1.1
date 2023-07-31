import React, { useState } from 'react'
import { navbarIcons } from '../data'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import './navbar.css';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='nav'>
            <div className={`${showMenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
                <ul className='nav_list'>
                    {navbarIcons.map(({ name, icon, path }, index) => {
                        return (
                            <motion.li className='nav_item' key={index} whileTap={{ scale: 0.9 }}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'active_nav nav_link' : 'nav_link'} onClick={() => setShowMenu(!showMenu)}>
                                    {icon}
                                    <h3 className='nav_name'>{name}</h3>
                                </NavLink>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
            <div className={`${showMenu ? 'nav_toggle animate_toggle' : 'nav_toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar