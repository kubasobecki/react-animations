import React from 'react';

import './Backdrop.css';

const backdrop = props => {
    return (
        <div
            className={`Backdrop ${props.show}`}
            style={{ animationDuration: props.duration + 'ms' }}
        ></div>
    );
};

export default backdrop;
