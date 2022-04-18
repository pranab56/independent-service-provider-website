import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='mt-5 container'>
                <h2 className='text-center text-orchid'>My Services</h2>
                <div className='grid mt-4'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service} >
                        </Service>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Services;
