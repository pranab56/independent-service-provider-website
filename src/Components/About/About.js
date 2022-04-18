import React from 'react';
import Menubar from '../Menubar/Menubar';
import Avatar from '../../Images/AvatarMaker.jpeg'
import './About.css'

const About = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div style={{ height: '65vh' }} className='container mt-5'>
                <div className='d-flex justify-content-center'>
                    <img className='border rounded-circle img' src={Avatar} alt="" />
                </div>
                <div>
                    <h5 className='text-center text-orchid'>Abu Jakaria</h5>
                </div>
                <div className='container mt-5 d-flex justify-content-center'>
                    <p>Hey there, I am <span className='fw-bold'>Abu Jakaria</span> a student of Computer Science and Technology at Dhaka Polytechnic Institute. In 2022 , I set a Goal . <br /> That goal is to acquire some of my own skills and to do a good job with that skill. For that I enroll in this course and keep trying will my best.</p>
                </div>
                
            </div>
        </div>
    );
};

export default About;