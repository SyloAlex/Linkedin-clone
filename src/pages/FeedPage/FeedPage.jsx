import React from 'react'
import Feed from '../../components/Feed/Feed'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

const FeedPage = () => {
    return (
        <React.Fragment>
            <Header />
            <div className="App-body">
                <Sidebar />
                <Feed />
            </div>
        </React.Fragment>
    )
}

export default FeedPage