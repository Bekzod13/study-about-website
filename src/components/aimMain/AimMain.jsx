import React from 'react';
import {Link} from 'react-router-dom';
import './aimMainStyles.css';

// import icons
import {FaReact, FaPython} from 'react-icons/fa';
import {VscHubot} from 'react-icons/vsc';

const AimMain = () => {
    return (
        <div className="aim-main">
            <div className="aim-main-container">
                <Link to="/about" className="aim-main-box">
                    <div className="aim-main-icon-box"><FaReact className="aim-main-icon" /></div>
                    <h2 className="aim-main header">Front end</h2>
                    <p className="aim-main-description">Bu yo'nalishda biz sizga web dasturlashning front end yo'nalishi bo'yicha React Js ga asoslangan mashg'ulotlarni taklif etamiz va siz bu yo'nalish orqali ishlay olasiz.</p>
                </Link>
                <Link to="/about" className="aim-main-box">
                    <div className="aim-main-icon-box"><FaPython className="aim-main-icon" /></div>
                    <h2 className="aim-main header">Back end</h2>
                    <p className="aim-main-description">Bu yo'nalishda biz sizga web dasturlashning back end yo'nalishi bo'yicha Python va Django ga asoslangan mashg'ulotlarni taklif etamiz va siz bu yo'nalish orqali ishlay olasiz.</p>
                </Link>
                <Link to="/about" className="aim-main-box">
                    <div className="aim-main-icon-box"><VscHubot className="aim-main-icon" /></div>
                    <h2 className="aim-main header">Telegram Bot</h2>
                    <p className="aim-main-description">Bu yo'nalishda biz sizga har qanday turdagi telegram botlarini qila oladigan darajada bilimga ega bo'lasiz va o'z biznesingizni telegramda boshlaysiz.</p>
                </Link>
            </div>
        </div>
    )
}

export default AimMain
