import React from "react";
import './home.css'

import Hero from '../../components/Hero'

export default function Home() {
    return (
        <div className="home-wrapper">
            <Hero />
            <div className="home-content-wrapper">
                <p>Home Page Content Will Go Here</p>
            </div>
        </div>
    )
}