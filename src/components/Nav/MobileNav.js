import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './mobileNav.css'

export default function MobileNav() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu slide-out")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu slide-in')
        } else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu slide-out')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{width: '100%'}}>
            <nav className="mobile-nav">
                <span className="secondary-slogan">We Expect, Deliver, and Achieve Ecellence.</span>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>

                <div className={menu_class}>
                    <ul className="menu-links">
                        <li className="hamberger-list-item"><NavLink exact to="/" className='hamberger-nav-link' onClick={updateMenu}>HOME</NavLink></li>
                        <li className="hamberger-list-item"><NavLink exact to="/about" className='hamberger-nav-link' onClick={updateMenu}>ABOUT</NavLink></li>
                        <li className="hamberger-list-item"><NavLink exact to="/ourWork" className='hamberger-nav-link' onClick={updateMenu}>OUR WORK</NavLink></li>
                        <li className="hamberger-list-item"><NavLink exact to="/contact" className='hamberger-nav-link' onClick={updateMenu}>CONTACT</NavLink></li>
                        <li className="hamberger-list-item"><NavLink exact to="/requestBid" className='hamberger-nav-link' onClick={updateMenu}>REQUEST A BID</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};