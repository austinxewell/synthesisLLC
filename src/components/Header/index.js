import React from "react";
import "./header.css";

import { FaFacebookF, FaRegEnvelope, FaInstagram } from 'react-icons/fa'

export default function Header() {
    return (
        <div className="header-wrapper">
            <div className="bid-text">
                <p className="request-bid">Request Your Bid Today:</p>
                <p className="request-bid-bottom">Anthony: <a href="tel://(385) 555-0123" className="phone-number">(385) 555-0123</a> | 
                Email: <a href="mailto://austin.ewell86@gmail.com" className="phone-number">synthesisconstruction@gmail.com</a></p>
                <div className="header-icons">
                    <a href="mailto://austin.ewell86@gmail.com"><FaRegEnvelope className="icon" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF className="fb-icon" /></a>
                </div>
            </div>
            <div className="header-img-wrapper">
                <img className='header-img' src={require('../../assets/pictures/rectHeader.jpg')} alt='SynthesisConstruction'></img>
            </div>
        </div>
    )
}