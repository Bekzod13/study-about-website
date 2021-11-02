import React from 'react';
import './footerStyles.css';

// import icons
import {FaTelegram} from 'react-icons/fa';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

// import images
import logo from '../../images/logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="footer-main">
                    <div className="footer-main-left-box">
                        <h1 className="footer-main-header">Aloqa</h1>
                        <div className="footer-main-contact-infos">
                            <h4 className="footer-main-info-header">Manzil:</h4>
                            <p className="footer-main-info-description">
                                Namangan viloyati, Namangan shahri <br /> Islom Karimov ko'chasi 4 - B uy.
                            </p>
                        </div>
                        <div className="footer-main-contact-infos">
                            <h4 className="footer-main-info-header">Murojat uchun tel:</h4>
                            <p className="footer-main-info-description">
                                +998(94) 172-33-43
                            </p>
                        </div>
                        <div className="footer-main-contact-infos">
                            <h4 className="footer-main-info-header">Email:</h4>
                            <p className="footer-main-info-description">
                                blackcoders@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="footer-main-right-box">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-title">
                        &copy;CopyRight by <span>Black Coders</span>  Team - 2021 Sept 21
                    </div>
                    <div className="footer-icons">
                        <a href="https://t.me/black_coders_developers">
                            <FaTelegram className="footer-icon" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <AiFillFacebook className="footer-icon" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <AiFillInstagram className="footer-icon" />
                        </a>  
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Footer
