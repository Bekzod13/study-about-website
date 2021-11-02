import React from 'react';
import { Link } from 'react-router-dom';
import './heroStyles.css';

// import images




const Hero = ({hero, heroHeader}) => {
    return (
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-left-box">
                        <h1 className="hero-header">{heroHeader}</h1>
                        <Link to="/about" className="link-to-about">Ba'tafsil</Link>
                    </div>
                    <div className="hero-right-box">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default Hero;
