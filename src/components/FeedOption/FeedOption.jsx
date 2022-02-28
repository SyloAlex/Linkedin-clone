import React from 'react'
import './FeedOption.css'

const FeedOption = ({ title, Icon, color }) => {
    return (
        <div className="FeedOption">
            <Icon style={{ color: color }} />
            <span style={{ color: color }}>{title}</span>
        </div>
    )
}

export default FeedOption