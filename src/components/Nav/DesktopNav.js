import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.css"

export default function DesktopNav() {
     const [sticky, setSticky] = useState(false);

     useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 253);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
     })
    return (
        <div className='nav-wrapper'>
            <nav>
                <div className={`${sticky ? "nav-link-wrapper-sticky" : 'nav-link-wrapper'}`}>
                    <NavLink exact to="/" className='nav-link'>HOME</NavLink>
                    <NavLink exact to="/about" className='nav-link'>ABOUT</NavLink>
                    <NavLink exact to="/ourWork" className='nav-link'>OUR WORK</NavLink>
                    <NavLink exact to="/contact" className='nav-link'>CONTACT</NavLink>
                    <NavLink exact to="/requestBid" className='nav-link'>REQUEST A BID</NavLink>
                </div>           
            </nav>
        </div>
    )
}