import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../Firebase';
import logo from '../Images/comm_meetlogo.avif';
import bubble from '../Images/bubble video.mp4'
import './Login.css';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User Logged In Successfully');
      alert('Success');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='loginUser'>
      <main className='container'>
        <div className="col_1">
          <div className="headitems">
            <div className="logo">
              <img src={logo} alt="Meet logo" />
              <p>Meet</p>
            </div>
          </div>

          <div className="text_content">
            <span>Welcome Back!</span>
            <span>Please login to continue</span>
          </div>

          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button type="submit" onClick={handleLogin}>Login</button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
        <div className="col_2">
          <div className="video-frame">
            <video
              autoPlay
              loop
              muted
              // controls
              playsInline
              type = 'video/mp4'
              src={bubble}>
              {bubble}
            </video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginUser;
