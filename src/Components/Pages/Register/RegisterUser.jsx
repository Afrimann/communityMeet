import React, { useState } from 'react';
import auth from '../../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import logo from '../Images/comm_meetlogo.avif';
import s_img1 from '../Images/small_img1.webp';
import s_img2 from '../Images/small_img2.webp';
import s_img3 from '../Images/small_img3.webp';
import bubble from '../Images/bubble video.mp4'
import './Register.css';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        nickName: '',
        location: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep === 1 && !formData.email) {
            setError("Email is required");
            return;
        }
        if (currentStep === 2 && !formData.password) {
            setError("Password is required");
            return;
        }
        if (currentStep === 3 && !formData.nickName) {
            setError("Nickname is required");
            return;
        }
        setError("");
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setCurrentStep(currentStep - 1);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            console.log('User Registered Successfully');
            alert('Success');
            navigate('/dashboard',
                { state: { formData } }
            )
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='registerUser'>
            <main className='container'>
                <div className="col_1">
                    <div className="headitems">
                        <div className="logo">
                            <img src={logo} alt="Meet logo" />
                            <p>Meet</p>
                        </div>
                        <div className="help">
                            <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                            <p>Help</p>
                        </div>
                    </div>

                    <div className="small_images">
                        <div className="_">
                            <img src={s_img1} alt="Small image 1" />
                            <img src={s_img2} alt="Small image 2" />
                            <img src={s_img3} alt="Small image 3" />
                        </div>
                    </div>

                    <div className="text_content">
                        <span>Meet Theeva!</span>
                        <span>Theeva would be pleased to meet with you!</span>
                    </div>

                    <div className="form_progress_bar">
                        <div>
                            <span className={`${currentStep >= 1 ? 'active' : ''}`}>1</span>
                            <span></span>
                        </div>
                        <div>
                            <span className={`${currentStep >= 2 ? 'active' : ''}`}>2</span>
                            <span></span>
                        </div>
                        <div>
                            <span className={`${currentStep >= 3 ? 'active' : ''}`}>3</span>
                            <span></span>
                        </div>
                        <div>
                            <span className={`${currentStep >= 4 ? 'active' : ''}`}>4</span>
                        </div>
                    </div>

                    <div className="register-form">
                        {currentStep === 1 && (
                            <form onSubmit={handleNextStep}>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button type="submit">Next</button>
                            </form>
                        )}
                        {currentStep === 2 && (
                            <form onSubmit={handleNextStep}>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button type="button" onClick={handlePrevStep}>Previous</button>
                                <button type="submit">Next</button>
                            </form>
                        )}
                        {currentStep === 3 && (
                            <form onSubmit={handleNextStep}>
                                <label>Nickname:</label>
                                <input
                                    type="text"
                                    name="nickName"
                                    placeholder="Enter your nickname"
                                    value={formData.nickName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button type="button" onClick={handlePrevStep}>Previous</button>
                                <button type="button" onClick={handleNextStep}>Next</button>
                            </form>
                        )}
                        {currentStep === 4 && (
                            <form onSubmit={handleRegister}>
                                <label>Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Enter your location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button type="button" onClick={handlePrevStep}>Previous</button>

                                <div className="agree">
                                    <input
                                        type="checkbox"
                                        name="check"
                                        id="check"
                                    />
                                    <div>I agree to <span className='spec'>Terms and Conditions</span> & <span className='spec'>Privacy Policy</span></div>
                                </div>
                                <button type="submit" onClick={handleRegister}>Register</button>
                            </form>
                        )}
                        {error && <p>{error}</p>}
                    </div>
                </div>
                <div className="col_2">
                    <div className="video-frame">
                        <video
                            autoPlay
                            loop
                            muted
                            src={bubble}>
                            {bubble}
                        </video>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RegisterUser;
