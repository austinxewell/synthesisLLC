import React from "react";
import './hero.css'

export default function Hero() {
    return (
        <div className="hero-wrapper">
            <img className='hero-img' src={require('../../assets/pictures/hero.jpg')} alt='HeroImage'></img>
            <div className="slogan-wrapper">
                <p className="slogan-text">We Expect, Deliver, and Achieve Exellence.</p>
                <div className="requestBid-btn">
                    <a className="requestBid-text" href="/requestBid">Request a Bid <i className="material-icons hero-quote-icon">request_quote</i></a>
                </div>
            </div>
        </div>
    )
}