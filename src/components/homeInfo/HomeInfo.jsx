import React from 'react';
import './homeInfoStyles.css';

const HomeInfo = ({homeInfoHeader, homeInfoDescription, homeInfoImg, leftOrder}) => {
    return (
        <div className="home-info">
            <div className="home-info-container"> 
            {
                leftOrder ? (
                    <>
                        <div className="home-info-box-1">
                            <img src={homeInfoImg} alt="" />
                        </div>
                        <div className="home-info-box-2">
                            <h2 className="home-info-header">{homeInfoHeader}</h2>
                            <p className="home-info-desciption">{homeInfoDescription}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="home-info-box-2">
                            <h2 className="home-info-header">{homeInfoHeader}</h2>
                            <p className="home-info-desciption">{homeInfoDescription}</p>
                        </div>
                        <div className="home-info-box-1">
                            <img src={homeInfoImg} alt="" />
                        </div>
                    </>
                )
            }

            </div>
        </div>
    )
}

export default HomeInfo;
