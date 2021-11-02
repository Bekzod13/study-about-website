import React from 'react';
import './courseGridStyles.css'
import CourseCard from './../courseCard/CourseCard';

const CourseGrid = () => {
    return (
        <div className="course-grid-container">
            <CourseCard
                courseName={'Front End'}
                courseSection1={'HTML 5'}
                courseSection2={'CSS 3'}
                courseSection3={'Bootstrap 5'}
                courseSection4={'Javascript'}
                courseSection5={'React js'}
                courseSection6={'Deploy App'}
                courseTime={'6'}
                courseCount={'299 000'}
                />
                            <CourseCard
                courseName={'Back End'}
                courseSection1={'Python'}
                courseSection2={'Django'}
                courseSection3={'Github, Gitbash'}
                courseSection4={'Sun`iy idrok'}
                courseSection5={'Telegram bot'}
                courseSection6={'MySql'}
                courseTime={'6'}
                courseCount={'299 000'}
                />
                            <CourseCard
                courseName={'UX/UI Dizayn'}
                courseSection1={'Figma'}
                courseSection2={'Adobe XD'}
                courseSection3={'Photoshop'}
                courseSection4={'Web dezaynlar'}
                courseSection5={'Mobil dizaynlar'}
                courseTime={'4'}
                courseCount={'299 000'}
                />
                            <CourseCard
                courseName={'AUTOCAD'}
                courseSection1={'AUTOCAD'}
                courseSection2={'3D Max'}
                courseSection3={'Create real projects'}
                courseSection4={'Work experience'}
                courseSection5={''}
                courseTime={'4'}
                courseCount={'299 000'}
                />
                                   <CourseCard
                courseName={'IELTS'}
                courseSection1={'Listening'}
                courseSection2={'Reading'}
                courseSection3={'Writing'}
                courseSection4={'Speaking'}
                courseSection5={''}
                courseTime={'9'}
                courseCount={'199 000'}
                />
                                   <CourseCard
                courseName={'Rus tili'}
                courseSection1={'Grammatika'}
                courseSection2={'Pазговор'}
                courseSection3={''}
                courseSection4={''}
                courseSection5={''}
                courseTime={'3'}
                courseCount={'199 000'}
                />
        </div>
    )
}

export default CourseGrid
