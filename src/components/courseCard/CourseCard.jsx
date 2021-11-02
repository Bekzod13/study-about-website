import React from 'react';

import './courseCardStyles.css';

const CourseCard = ({
    courseName,
    courseSection1,
    courseSection2,
    courseSection3,
    courseSection4,
    courseSection5,
    courseSection6,
    courseTime,
    courseCount
}) => {
    return (
        <div className="course-card-container">
            <div className="course-name">{courseName}</div>
                <h3 className="course-sections">Kurs qismlari</h3>
            <div className="course-body">
                <p className="course-section">{courseSection1}</p>
                <p className="course-section">{courseSection2}</p>
                <p className="course-section">{courseSection3}</p>
                <p className="course-section">{courseSection4}</p>
                <p className="course-section">{courseSection5}</p>
                <p className="course-section">{courseSection6}</p>
            </div>
            <div className="course-time">{courseTime} - oy</div>
            <div className="course-count">{courseCount} so'm</div>
            <a className="course-contact" href="tel:+998941723343">Ro'yxatdan o'tish</a>
        </div>
    )
}

export default CourseCard
