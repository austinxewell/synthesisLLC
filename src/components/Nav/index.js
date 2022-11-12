import React from 'react'
import "./nav.css"

import Header from '../Header';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Nav() {
    return (
        <header>
            <Header />
            <DesktopNav />
            <MobileNav />
        </header>
    )
}