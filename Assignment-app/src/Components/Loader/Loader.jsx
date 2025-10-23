import React from 'react';
import LoaderImg from '../../assets/logo.png'
import './Loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <span className="text text-purple-500">L</span>
            <img src={LoaderImg} alt="loader icon" className="spinner" />
            <span className="text text-purple-50">oading...</span>
        </div>
    );
};

export default Loader;