import React from 'react'
import './App.css'
import store from '../redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import Register from '../pages/Register/Register'
import LoginPage from '../pages/LoginPage/LoginPage'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path='/' element={<Register />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/feed' element={<FeedPage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default App;