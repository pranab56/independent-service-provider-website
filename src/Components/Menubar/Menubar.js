import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Menubar.css'
import logo from '../../Images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import { signOut } from 'firebase/auth';

const Menubar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow">
            <div className="container">
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="" />
                    <h4 className='font-family'>Up Fit</h4>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav ms-auto" >
                        <li className="nav-item">
                            <CustomLink to='/'>Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/blogs'>Blogs</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/about'>About</CustomLink>
                        </li>
                        <li className="nav-item btn-margin">
                            {user ?
                                <button onClick={logout} className='btn-pink fw-bolder'>Sign Out</button>
                                :
                                <CustomLink className='btn-pink rounded' to='/login'>Login</CustomLink>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Menubar;