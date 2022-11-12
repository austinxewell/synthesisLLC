import React from "react";
import "./footer.css";
import { FaFacebookF, FaRegEnvelope, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="split-footer-display-wrapper">
                <div className="left-content-wrapper">
                    <img className='footer-img' src={require('../../assets/pictures/rectFooter.jpg')} alt='SynthesisConstruction'></img>
                    <p className="footer-slogan">Synthesis Concrete & Construction LLC specializes in high quality concrete work. Proudly serving Utah, Salt Lake, and Davis Counties.</p>
                    <div className="footer-icon-wrapper">
                        <a href="/requestBid" className="footer-requestBid-btn"><span className="footer-request-text">Request A Bid</span></a>
                        <div className="footer-icons">
                            <a href="mailto://austin.ewell86@gmail.com"><FaRegEnvelope className="icon" /></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF className="footer-fb-icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="right-content-wrapper">
                    <p className="badges">temp content for ref</p>
                </div>
            </div>
            <div>
                <div className="credit-text">
                    <p className="copyright">Copyright © 2022 Synthesis Concrete and Construction LLC All Rights Reserved.</p>
                    <p className="designed-by">Designed By: <a className="designed-by-link" href="https://www.linkedin.com/in/austin-ewell-01a60313a/" target="_blank" rel="noreferrer">Austin Ewell</a></p>
                </div>
                <div className="footer-nav-wrapper">
                    <a href="/" className="footer-nav-link">Home</a>/
                    <a href="/about" className="footer-nav-link"> About</a>/
                    <a href="/ourWork" className="footer-nav-link">Our Work</a>/
                    <a href="/contact" className="footer-nav-link">Contact</a>/
                    <a href="/requestBid" className="footer-nav-link">Request a Bid</a>
                </div>
            </div>
        </div>
    )
}