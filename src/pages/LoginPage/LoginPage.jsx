import React from 'react'
import Logo from '../../assets/big-linkedin-logo.png';
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className="Login-container">
            <figure className="Logo-container">
                <img src={Logo} alt="Big Logo" />
            </figure>
            <form className="Login-form">
                <input type="email" className="Email" placeholder='Email' />
                <input type="password" className="Password" placeholder='Password' />
                <button type='submit' className='Register-button'>Log In</button>
            </form>

        </div>
    )
}

export default LoginPage;