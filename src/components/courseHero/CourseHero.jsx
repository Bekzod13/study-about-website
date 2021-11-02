import React from 'react';
import { Link } from 'react-router-dom';
import './courseHeroStyles.css';

const CourseHero = ({courseHeroImg, courseHeroHeader}) => {
    return (
        <div className="course-hero">
        <div className="course-hero-container">
            <div className="course-hero-left-box">
                <h1 className="course-hero-header">{courseHeroHeader}</h1>
                <Link to="/course" className="link-to-about">Ba'tafsil</Link>
            </div>
            <div className="course-hero-right-box">
                <img src={courseHeroImg} alt="" />
            </div>
        </div>
    </div>
    )
}

export default CourseHero
