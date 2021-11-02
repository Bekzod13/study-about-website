import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './navbarStyles.css';


//import icons
import {VscThreeBars} from 'react-icons/vsc';
import {FaTimes} from 'react-icons/fa';
import logo from '../../images/logo.svg';

const Navbar = () => {

    const [active, setActive] = useState(1);
    const [link, setLink] = useState(3);

    const toggleActive = (index)=>{
        if(index > 2){
            setActive(1);
        }else{
            setActive(index);
        }

    }

    const toggleLink = (ind)=>{
            setLink(ind);
        }

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>
                <div className={active === 1 ? "toggle-box active" : "toggle-box"} onClick={()=>toggleActive(2)}>
                    <VscThreeBars/>
                </div>
                <div className={active === 2 ? "toggle-box active" : "toggle-box"} onClick={()=>toggleActive(1)}>
                    <FaTimes/>
                </div>
                
                <ul className={active === 2 ? "nav-links active" : "nav-links"}>
                <li className="nav-link-item">
                    <Link to="/" className={link === 3 ? "nav-link active" : "nav-link"} onClick={()=>{
                        toggleActive(3)
                        toggleLink(3)}}>
                        asosiy
                    </Link>
                   </li>
                   <li className="nav-link-item">
                        <Link to="/about" className={link === 4 ? "nav-link active" : "nav-link"} onClick={()=>{
                        toggleActive(4)
                        toggleLink(4)}}>
                           biz haqimizda
                        </Link>
                   </li>
                   <li className="nav-link-item">
                        <Link to="/course" className={link === 5 ? "nav-link active" : "nav-link"} onClick={()=>{
                        toggleActive(5)
                        toggleLink(5)}}>
                           kurs haqida
                        </Link>
                   </li>
                   <li className="nav-link-item">
                        <Link to="/contact" className={link === 6 ? "nav-link active" : "nav-link"} onClick={()=>{
                        toggleActive(6)
                        toggleLink(6)}}>
                           bog'lanish
                        </Link>
                   </li>
                   <li className="nav-link-item">
                        <Link to="/sign-up" className="nav-link sign-up-btn">
                           a'zo bo'lish
                        </Link>
                   </li>
               </ul>
           </div>
        </div>
    )
}

export default Navbar
