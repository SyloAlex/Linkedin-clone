import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

const HeaderOption = ({ title, Icon, avatar }) => {
    return (
        <div className="HeaderOption">
            {Icon && <Icon className='HeaderOption-icon' />}
            {avatar && (
                <Avatar className='HeaderOption-icon' src={avatar} />
            )}
            <p className='HeaderOption-title'>{title}</p>
        </div>
    )
}

export default HeaderOption