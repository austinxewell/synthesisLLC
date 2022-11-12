import React from "react";
import './contact.css';

export default function Contact() {
    return (
        // anton, permanent marker, 
        <div>
            <div className="contact-hero-wrapper">
                <div className='contact-hero-text-wrapper'>
                    <p className='inTouch-text'>Lets Get In Touch!</p>
                    <a href='/requestBid' className='requestBid-hero-text'>Request Your Free Bid Today!</a>
                </div>
            </div>
            <div className="contact-info-container">
                <div className="contact-info-wrapper">
                    <div className="location-wrapper">
                        <div className="icon-background">
                            <i className="material-icons location-icon">location_on</i>
                        </div>
                        <p className="title-text">LOCATION:</p>
                        <p className="location-address-text">
                            <p className="address-first-line contact-info-text">5927 w potterstone Circle</p>
                            <p className="address-second-line contact-info-text">Herriman, UT</p>
                            <p className="address-third-line contact-info-text">Hours: Monday-Friday 7am - 6pm </p>
                        </p>
                    </div>
                    <div className="phone-wrapper">
                        <div className="icon-background">
                            <a href="tel://(385) 555-0123" className="material-icons phone-icon">call</a>
                            <i className="material-icons contact-icon">contact_mail</i>
                        </div>
                        <p className="title-text phone-title">PHONE:</p>
                        <p className="title-text contact-title">CONTACT:</p>
                        <a href="tel://(385) 555-0123" className="phone-text contact-info-text">(385) 555-0123</a>
                    </div>
                    <div className="email-wrapper">
                        <div className="icon-background email-background">
                            <a href="mailto://synthesisconstruction@gmail.com" className="material-icons email-icon">mail_outline</a>
                        </div>
                        <p className="title-text email-title">EMAIL:</p>
                        <a href="mailto://synthesisconstruction@gmail.com" className="email-text contact-info-text">synthesisconstruction@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}