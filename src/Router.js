import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Navbar from './Components/NavBar'
import Recipes from './Components/Recipes'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? (<Component {...rest} />) : (<Navigate to="/login" />)
    );
};

const Router = () => {
    return (
        <Routes>
            <Route path="/home" element={<ProtectedRoute component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes/:id" element={<ProtectedRoute component={Recipes} />} />
        </Routes>
    );
};

export default Router;