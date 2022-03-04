import { Avatar } from '@mui/material'
import React from 'react'
import FeedOption from '../FeedOption/FeedOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import './Post.css'

const Post = ({ name, description, message, photoUrl, timestamp }) => {
    return (
        <div className="Post">
            <div className="Post-header">
                <Avatar />
                <div className="Post-header-info">
                    <p className="Post-header-info-name">{name}</p>
                    <p className="Post-header-info-description">{description}</p>
                    <p className="Post-header-info-timestamp">No date yet</p>
                </div>
            </div>
            <div className="Post-body">
                <p>{message}</p>
            </div>
            <div className="Post-buttons">
                <FeedOption
                    Icon={ThumbUpIcon}
                    color='#666868'
                    title='Like' />
                <FeedOption
                    Icon={CommentIcon}
                    color='#666868'
                    title='Comment' />
                <FeedOption
                    Icon={ArrowForwardIcon}
                    color='#666868'
                    title='Share' />
                <FeedOption
                    Icon={SendIcon}
                    color='#666868'
                    title='Send' />
            </div>
        </div>
    )
}

export default Post