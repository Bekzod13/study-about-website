import React from 'react';
import { Link } from 'react-router-dom';
import './contactHeroStyles.css';

const ContactHero = ({contactHeroImg, contactHeroHeader}) => {
    return (

        <div className="contact-hero">
            <div className="contact-hero-container">
                <div className="contact-hero-left-box">
                    <h1 className="contact-hero-header">{contactHeroHeader}</h1>
                    <Link to="/about" className="link-to-about">Ba'tafsil</Link>
                </div>
                <div className="contact-hero-right-box">
                    <img src={contactHeroImg} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default ContactHero
