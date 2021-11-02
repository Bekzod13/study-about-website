import React from 'react';
import './popupStyles.css';

function Popup(props) {
    return (
        props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>&times;</button>
                {
                    props.children
                }

            </div>
        </div>
    ):"";
}

export default Popup;