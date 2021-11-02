import React from 'react';
import './aboutInfoStyles.css';

const AboutInfo = ({aboutInfoHeader, aboutInfoDescription, documentImg, userInfo, tel, aboutInfoImg}) => {
    return (
        <div className={userInfo ? "about-info active" : "about-info"}>
            <div className="about-info-container">
                <h2 className="about-info-header">
                    {aboutInfoHeader}
                </h2>
                <p className="about-info-description">
                    {aboutInfoDescription}
                </p>
                <p className="about-info-tel">{tel}</p>
                <img className={aboutInfoImg ? "aboutInfoImg active": "aboutInfoImg"} src={documentImg} alt="" />
            </div>
        </div>
    )
}

export default AboutInfo;
