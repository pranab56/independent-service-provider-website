import React from 'react';
import Menubar from '../Menubar/Menubar';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div className='container'>
                <div className='checkout-container'>
                    <form className='checkout mt-5 p-3 shadow'>
                        <h3 className='text-center mt-3 text-orchid'>Your Information</h3>
                        <h6 className='text-center text-orchid'>checkout</h6>
                        <div className='d-flex justify-content-center flex-column line mt-4'>
                            <label htmlFor="first-name">Your First Name</label> <br />
                            <input type="text" name="" id="1" required />
                        </div>
                        <div className='d-flex justify-content-center flex-column line mt-4'>
                            <label htmlFor="last-name">Your Last Name</label> <br />
                            <input type="text" name="" id="2" required />
                        </div>
                        <div className='d-flex justify-content-center flex-column linee mt-4'>
                            <label htmlFor="email"></label>Your Email<br />
                            <input type="email" name="" id="3" required />
                        </div>
                        <div className='d-flex justify-content-center flex-column linee mt-4'>
                            <label htmlFor="phone-number"></label>Your Phone Number<br />
                            <input type="number" name="" id="4" required />
                        </div>
                        <div className='d-flex justify-content-center flex-column linee mt-4'>
                            <label htmlFor="birth-date"></label>Birth Date<br />
                            <input type="date" name="" id="5" required />
                        </div>
                        <button className='container border-0 mt-4 btn-orchid'>CheckOut</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;