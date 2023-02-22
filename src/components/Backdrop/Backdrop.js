import React from 'react';

import './Backdrop.css';

const backdrop = props => {
    return <div className={`Backdrop ${props.show}`}></div>;
};

export default backdrop;
