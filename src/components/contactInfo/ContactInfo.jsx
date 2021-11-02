import React from 'react';
import './contactInfoStyles.css';
// import icons
import {FaTelegram} from 'react-icons/fa';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai';

const ContactInfo = () => {
    return (
            <div className="contact-info">
                <div className="contact-info-container">
                    <p className="contact-info-description">
                        Ijtimoiy tarmoqlardagi manzillarimiz: <br /><br />
                    </p>
                    <div className="contact-icons">
                        <a href="https://t.me/black_coders_developers">
                            <FaTelegram className="contact-icon" /> Telegram: @black_coders_developers
                        </a>
                        <br />
                        <a href="https://t.me/coders_admin">
                            <FaTelegram className="contact-icon" /> Telegram: @coders_admin
                        </a>
                        <br />
                        <a href="https://www.facebook.com/">
                            <AiFillFacebook className="contact-icon" /> Facebook: @black_coders_namangan
                        </a>
                        <br />
                        <a href="https://www.instagram.com/">
                            <AiFillInstagram className="contact-icon" />  Instagram:@black_coders_namangan
                        </a>  
                    </div>
                </div>
            </div>
        )
        
        
}

export default ContactInfo;
