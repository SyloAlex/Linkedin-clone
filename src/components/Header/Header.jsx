import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import logo from '../../assets/linkedin.png'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-left">
                <figure className="Header-figure">
                    <img src={logo} alt="Logo" className="Header-image" />
                </figure>
                <div className="Header-search">
                    <SearchIcon />
                    <input type="text" className="Header-input" placeholder='Search' />
                </div>
            </div>
            <div className="Header-right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='My Network' />
                <HeaderOption avatar={'https://media-exp1.licdn.com/dms/image/C4D03AQE-GoamtxoKYw/profile-displayphoto-shrink_100_100/0/1585342255797?e=1651708800&v=beta&t=miUefeQ8AX8JVGg34Ourk1vG358IZiY1Q87vVTGSZN0'} title='You' />
            </div>
        </div>
    )
}

export default Header