import React from 'react';

// import components
import CourseHero from '../../components/courseHero/CourseHero';
import AboutInfo from '../../components/aboutInfo/AboutInfo';
import CourseGrid from '../../components/courseGrid/CourseGrid';

// import images
import courseHeroImg from '../../images/courseHero.svg';

const Course = () => {
    return (
        <div>
            <CourseHero
                courseHeroImg={courseHeroImg}
                courseHeroHeader={'O`quv markazidagi barcha kurslar'}/>
            <br/><br/>
            <AboutInfo aboutInfoHeader={'Barcha Kurslar'} userInfo={true}/>
            <CourseGrid />
        </div>
    )
}

export default Course
