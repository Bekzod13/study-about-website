import React from 'react';
import './aimStyles.css';

const Aim = ({aim, description}) => {
    return (
        <div className="aim">
             <div className="aim-container">
                 <h1 className="aim-header">{aim}</h1>
                 <p className="aim-description">{description}</p>
             </div>
        </div>
    )
}

export default Aim
