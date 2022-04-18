import React from 'react';
import Menubar from '../Menubar/Menubar';

const Blogs = () => {
    return (
        <div>
            <Menubar></Menubar>
            <div>
                <h2 className='text-center mt-5 text-orchid'>Question and Answer</h2>
            </div>
            <div className='container mt-5'>
                <h4>1. Difference between authorization and authentication .?</h4>
                <div className='row mt-5 justify-content-around'>
                    <div className='col-lg-6 text-justify'>
                        <h5>Authentication</h5>
                        <p>1. Determines whether users are who they claim to be</p>
                        <p>2. Challenges the user to validate credentials (for example, through passwords, answers to security questions, or facial recognition)</p>
                        <p>3. Usually done before authorization</p>
                    </div>
                    <div className="col-lg-6 text-justify">
                        <h5>Authorization</h5>
                        <p>1. Determines what users can and cannot access</p>
                        <p>2. Verifies whether access is allowed through policies and rules</p>
                        <p>3. Usually done after successful authentication</p>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <h4>2. Why are you using firebase? What other options do you have to implement authentication.?</h4>
                <div className='mt-4'>
                    <p>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p>
                    <p><span className='fw-bold'>5 Common Authentication Types:-</span> <br />
                        <div className='ms-3'>
                            1. Password-based authentication. <br />
                            2. Multi-factor authentication. <br />
                            3. Certificate-based authentication. <br />
                            4. Biometric authentication. <br />
                            5. Token-based authentication.
                        </div>
                    </p>
                </div>
            </div>
            <div className="container mt-5">
                <h4>3. What other services does firebase provide other than authentication .?</h4>
                <div className="mt-4">
                    There are many services which Firebase provides, Most useful of them are:- <br />
                    <div className='ms-3'>
                        1. Cloud Firestore. <br />
                        2. Cloud Functions. <br />
                        3. Authentication. <br />
                        4. Hosting. <br />
                        5. Cloud Storage. <br />
                        6. Google Analytics. <br />
                        7. Predictions. <br />
                        8. Cloud Messaging. <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;