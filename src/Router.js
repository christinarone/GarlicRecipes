import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
// Write component imports here //
import Home from './Components/Home'
// import About from './components/About'
import Login from './Components/Login'

// import ProtectedRoute from './components/ProtectedRoute'

// Start Router function here //
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/recipe/:id" element={<Recipe/>} /> */}
                <Route path="/login" element={<Login />} />
                {/* <Route path="/about" element={<ProtectedRoute component={About} />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router