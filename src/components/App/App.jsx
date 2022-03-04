import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedPage from '../../pages/FeedPage/FeedPage'
import Home from '../../pages/Home/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/feed' element={<FeedPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App