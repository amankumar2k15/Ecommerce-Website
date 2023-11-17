const express = require('express');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserModelEcom = require("../models/userModel")

const check_Auth = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY)
        next()
    } catch (err) {
        return res.status(403).json({
            message: "Unauthorized",
            code: 403
        })
    }
}

const check_Admin = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const key = jwt.verify(token, process.env.SECRET_KEY)

    try {
        const user = await UserModelEcom.findOne({
            email: key.email
        })
        if (!user) {
            return res.status(404).json({ message: "Email does not exist", code: 404 })
        }

        if (user.type === 'admin') {
            next()
        } else {
            return res.status(403).json({ message: "You are not authorized to access this route", code: 403 })
        }
    } catch (err) {
        return res.status(403).json({
            message: "Unauthorized",
            code: 403
        })
    }
}

module.exports = { check_Auth, check_Admin }