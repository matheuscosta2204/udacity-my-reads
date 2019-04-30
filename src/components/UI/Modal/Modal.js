import React from 'react';

import './Modal.css';

const modal = (props) => {
    const cssClasses = ["modal", props.show ? "modal-open" : "modal-closed"];
    return (
        <div className={cssClasses.join(' ')}>
            <div className="modal-content">
                <div className="first-page">
                    <p>{props.book.title}</p>
                </div>
                <div className="second-page"></div>
            </div>
        </div>
    );
};

export default modal;