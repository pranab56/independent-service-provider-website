import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';
import CustomLink from '../CustomLink/CustomLink';
import Menubar from '../Menubar/Menubar';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setCPassword(event.target.value)
    }
    const handleSignUp = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password, cPassword)
    }
    if (user) {
        navigate('/login')
    }
    if (loading) {
        return <p className='text-center text-warning'>Loading...</p>;
    }
    let errorElement
    if (error) {
        errorElement = <p style={{ fontSize: '10px', color: 'red' }} className='d-flex justify-content-center'>Error: {error.message}</p>
    }
    return (
        <div>
            <Menubar></Menubar>
            <form onSubmit={handleSignUp} className='login-container'>
                <div className='login mt-5 p-3 shadow'>
                    <h3 className='text-center mt-3 text-primary'>Sign UP</h3>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="email">Email</label> <br />
                        <input onBlur={handleEmail} type="email" name="" id="1" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="password">Password</label> <br />
                        <input onBlur={handlePassword} type="password" name="" id="2" required />
                    </div>
                    <div className='d-flex justify-content-center flex-column line mt-4'>
                        <label htmlFor="confirm-password">Confirm Password</label> <br />
                        <input onBlur={handleConfirmPassword} type="password" name="" id="3" required />
                    </div>
                    <input className='container border-0 mt-4 btn-primary' type="submit" value="Sign Up" />
                    <div className='d-flex justify-content-center font mt-2'>
                        <small>Already have an account ?</small><CustomLink className='link-color ms-2 fw-bold' to='/login'>Login</CustomLink>
                    </div>
                    {errorElement}
                    <div className='d-flex justify-content-around'>
                        <hr />
                        or
                        <hr />
                    </div>
                    <SocialSignIn></SocialSignIn>
                </div>
            </form>

        </div>
    );
};

export default SignUp;