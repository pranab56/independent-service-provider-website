import React from 'react';
import pic1 from '../../Images/pic-1.png'
import pic2 from '../../Images/pic-3.png'
import pic3 from '../../Images/pic-4.png'
import './Review.css'

const Review = () => {
    return (
        <div>
            <div className='container'>
                <h3 className='text-center text-success'>Client Says</h3>
                <div className='container row mt-4'>
                    <div className="col-lg-4 ">
                        <div className="card bg-1">
                            <div>
                                <p className='text-center'><i className="fa-solid fa-quote-left"></i> Jakaria is so great . The Best Trainer I've Ever met!! <i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic1} alt="" />
                            </div>
                            <h6 className='text-center text-orchid'>Flowers Tyson</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="card bg-2">
                            <div>
                                <p className='text-center'><i className="fa-solid fa-quote-left"></i> He is lovely boy and very sweet and best trainer. <i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic3} alt="" />
                            </div>
                            <h6 className='text-center text-orchid'>Joy Medina</h6>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="card bg-3">
                            <div>
                                <p className='text-center'><i className="fa-solid fa-quote-left"></i> He is a very good person and Awesome Trainer <i className="fa-solid fa-quote-right"></i></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className='rounded-circle' src={pic2} alt="" />
                            </div>
                            <h6 className='text-center text-orchid'>Tammie Ortiz</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;