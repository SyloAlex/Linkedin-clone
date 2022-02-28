import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import './App.css'

const App = () => {
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

export default App