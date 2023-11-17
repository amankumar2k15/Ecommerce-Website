const { json } = require('body-parser');
const UserModelEcom = require('../models/userModel');
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const { sendMail, sendOTP } = require("../Email/Email")

const createUser = async (req, res) => {
    const user = req.body;
    console.log(user)

    const salt = bcrypt.genSaltSync(+(process.env.SALT_ROUND))
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash

    const newUser = new UserModelEcom(user);
    try {
        const emailExist = await UserModelEcom.findOne({
            email: user.email
        })
        if (emailExist) {
            return res.status(400).json({ message: "Email is already registered, Please try another" })
        }

        await newUser.save()
        return res.status(201).json({
            message: "User registered successfully",
            result: newUser,
            email: sendMail(newUser)
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAllUser = async (req, res) => {
    try {
        const user = await UserModelEcom.find({})

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        } else {
            return res.status(200).json({
                message: "Users Fetched Successfully",
                result: user,
                count: user.length
            })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const updateEcomUser = async (req, res) => {
    const id = req.params.id
    const updatedUser = req.body

    try {
        if (updatedUser.password !== "") {
            const salt = bcrypt.genSaltSync(+(process.env.SALT_ROUND));
            const hash = bcrypt.hashSync(updatedUser.password, salt);
            updatedUser.password = hash
        }

        const findUser = await UserModelEcom.findOne({
            _id: id
        })
        if (!findUser) {
            return res.status(400).json({ message: "User does not exist" })
        }

        const test = await UserModelEcom.findByIdAndUpdate(id, updatedUser, { new: true })

        return res.status(200).json({
            message: "User updated successfully",
            result: test
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const findUser = await UserModelEcom.findOne({ _id: id })
        if (!findUser) {
            return res.status(400).json({ message: "User does not found" })
        }

        await UserModelEcom.findByIdAndDelete(id)
        return res.status(200).json({
            message: 'User deleted Successfully',
        })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModelEcom.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: "User does not found" })
        }

        let result = bcrypt.compareSync(password, user.password)
        if (!result) {
            return res.status(400).json({ message: "Password did not match" })
        } else {
            const token = jwt.sign(
                { email: user.email },
                process.env.SECRET_KEY,
                { expiresIn: "2h" }
            )

            return res.status(200).json({
                message: "Login Successfully",
                token: token,
                user: user
            })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const sendOtpToMail = async (req, res) => {
    const email = req.body.email

    try {
        const user = await UserModelEcom.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: "Email does not exist" })
        }

        const generateOTP = Math.ceil(Math.random() * 10000).toString();
        user.otp = generateOTP
        user.otpExpires = new Date(Date.now() + 10 * 60 * 1000)
        await user.save();

        return res.status(200).json({
            message: "OTP send successfully",
            email: user.email,
            OTP: sendOTP(generateOTP, user.email)
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
    }
}

const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await UserModelEcom.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" })
        }

        if (user.otpExpires < Date.now()) {
            user.otp = null;
            user.otpExpires = null;
            await user.save();
            return res.status(400).json({ message: "OTP has expired" })
        }

        // If OTP is correct and not expired, proceed with verification
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        return res.status(200).json({
            message: "OTP Verified Sucessfully",
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
    }
}

const changePassword = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModelEcom.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "Email does not found" })
        }

        user.password = password

        const salt = bcrypt.genSaltSync(+(process.env.SALT_ROUND))
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        await user.save()

        return res.status(200).json({
            message: "Password updated successfully"
        })


    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { createUser, getAllUser, updateEcomUser, deleteUser, userLogin, sendOtpToMail, verifyOTP, changePassword }

