import React from 'react';
import ReactDOM from "react-dom";
import App from "../App";
import { Outlet, Route, Navigate, BrowserRouter, NavLink } from "react-router-dom";
import Home from "../pages/Home"

const useAuth = () => {
    if (sessionStorage.getItem("loggedIn") == "true" && sessionStorage.getItem("admin") == "true") {
        return true
    } else {
        return false
    }
}

const AdminRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Home /> 
}

export default AdminRoutes;