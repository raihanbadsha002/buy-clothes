import React from 'react';
import Spinier from '../../images/Spinner.gif';

const LazyLoader = () => {
    return (
        <div className="lazy__loader">
            <img src={Spinier} alt="" />
        </div>
    );
};

export default LazyLoader;