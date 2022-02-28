import React from 'react'
import { Avatar } from '@mui/material'
import './Feed.css'
import FeedOption from '../FeedOption/FeedOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

const Feed = () => {
    return (
        <div className="Feed">
            <div className="Feed-post-container">
                <div className="Feed-post-input-container">
                    <Avatar className='Sidebar-top-avatar' />
                    <form>
                        <input
                            type="text"
                            className="Feed-post-input"
                            placeholder='Post!' />
                    </form>
                </div>
                <div className="Feed-post-options">
                    <FeedOption
                        Icon={ImageIcon}
                        color='#70B5F9'
                        title='Photo' />
                    <FeedOption
                        Icon={SubscriptionsIcon}
                        color='#7fc15e'
                        title='Video' />
                    <FeedOption
                        Icon={EventNoteIcon}
                        color='#e7a33e'
                        title='Event' />
                    <FeedOption
                        Icon={CalendarViewDayIcon}
                        color='#fc9295'
                        title='Write Article' />
                </div>
            </div>
            <div className="Feed-recent-post-container"></div>
        </div>
    )
}

export default Feed