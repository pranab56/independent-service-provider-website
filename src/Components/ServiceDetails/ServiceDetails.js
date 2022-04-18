import React from 'react';
import { useParams } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import Menubar from '../Menubar/Menubar';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <Menubar></Menubar>
            <div style={{ height: '50vh' }} className='container margin'>
                <div>
                    <h2 className='text-center'>Welcome to detail: {serviceId}</h2>
                </div>
                <div className='text-center'>
                    <CustomLink to="/checkout">
                        <button className='btn-orchid mt-3'>Proceed Checkout</button>
                    </CustomLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;