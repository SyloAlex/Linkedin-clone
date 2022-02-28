import { Avatar } from '@mui/material'
import React from 'react'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Sidebar.css'

const Sidebar = () => {
    const recentItems = (topic) => {
        return (
            <span>{topic}</span>
        )
    }

    return (
        <div className="Sidebar">
            <figure>
                <img className='Sidebar-background' src="https://addons-media.operacdn.com/media/CACHE/images/themes/85/99885/1.0-rev1/images/09bedeac-60b5-4f7d-8f04-017ae677b7cb/40cee2e941086f4a5f251317699ddd85.jpg" alt="background" />
            </figure>
            <div className="Sidebar-top">
                <Avatar className='Sidebar-top-avatar' />
                <h3 className='Sidebar-top-name'>Alejandro Mena</h3>
                <p className='Sidebar-top-info'>Software Developer at AgroCognitive and Smartbase Group</p>
            </div>
            <div className="Sidebar-stats">
                <div className="Sidebar-stat">
                    <p>Who viewed you:</p>
                    <p className="Sidebar-stat-number">151</p>
                </div>
                <div className="Sidebar-stat">
                    <p>Views on post:</p>
                    <p className="Sidebar-stat-number">151</p>
                </div>
            </div>
            <div className="Sidebar-button">
                <div className="Sidebar-button-recent">
                    <BookmarkIcon />
                    <p>Recent</p>
                </div>
                <div className="Sidebar-button-recentItems">
                    {recentItems('React.js')}
                    {recentItems('Google Firebase')}
                    {recentItems('JavaScript')}
                    {recentItems('Front-end development')}
                </div>
            </div>
        </div>
    )
}

export default Sidebar