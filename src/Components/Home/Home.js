import React from 'react';
import Menubar from '../Menubar/Menubar';
import Review from '../Review/Review';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="main-container">
                <Menubar></Menubar>
                <div className='container margin-top text-white'>
                    <h1 className='font-size'>Your Best Personal<br /> Gym Trainer</h1>
                    <p className='w-50 mt-4'>Hello, I am <span className='fw-bold'>PRANAB KUMAR</span>. I am a professional GYM Trainer. I'm working on this since 5 years and i've enough knowledge on this field. So you can hire me for make yourself fit.</p>
                    <button className='btn-orchid rounded mt-4 fw-bolder'>Hire me dear</button>
                </div>
            </div>
            <Services></Services>
            <div className='mt-1'>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;