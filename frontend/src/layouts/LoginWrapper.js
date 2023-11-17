import React from 'react'
import Login from "../pages/Login/Login"
import Register from "../pages/Login/Register"
import { Route, Routes } from 'react-router-dom'
import ForgetPassword from '../pages/Login/ForgetPassword'
import ChangePassword from '../pages/Login/ChangePassword'

const LoginWrapper = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/changePassword" element={<ChangePassword />} />
            </Routes>
        </>
    )
}

export default LoginWrapper