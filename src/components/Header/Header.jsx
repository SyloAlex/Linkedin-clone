import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-left">
                <figure className="Header-figure">
                    <img src="/" alt="Logo" className="Header-image" />
                </figure>
                <input type="text" className="Header-input" />
            </div>
            <div className="Header-right"></div>
        </div>
    )
}

export default Header