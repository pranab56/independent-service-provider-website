import React from 'react';
import './PageError.css';
import pageError from '../../Images/PageError404.jpg'
import Menubar from '../Menubar/Menubar';

const PageError = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='d-flex justify-content-center'>
                <img className='img-fluid img-size' src={pageError} alt="" />
            </div>
        </div>
    );
};

export default PageError;