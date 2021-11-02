import React from 'react';
import { Link } from 'react-router-dom';
import './aboutHeroStyles.css';

const AboutHero = ({aboutHeroHeader, aboutHero}) => {
    return (
            <div className="about-hero">
                <div className="about-hero-container">
                    <div className="about-hero-left-box">
                        <h1 className="about-hero-header">{aboutHeroHeader}</h1>
                        <Link to="/about" className="link-to-about">Ba'tafsil</Link>
                    </div>
                    <div className="about-hero-right-box">
                        <img src={aboutHero} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default AboutHero
