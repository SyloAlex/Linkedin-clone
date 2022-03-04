import React from 'react';
import Logo from '../../assets/big-linkedin-logo.png';
import './Home.css'

const Home = () => {
    return (
        <div className="Register-container">
            <figure className="Logo-container">
                <img src={Logo} alt="Big Logo" />
            </figure>
            <form className="Register-form">
                <input type="text" className="Name" placeholder='Full name (required)' />
                <input type="text" className="ProfilePic" placeholder='Profile Pic URL (not required)' />
                <input type="email" className="Email" placeholder='Email' />
                <input type="password" className="Password" placeholder='Password' />
                <button type='submit' className='Register-button'>Sign In</button>
            </form>

        </div>
    )
}

export default Home