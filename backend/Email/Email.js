const nodemailer = require("nodemailer")
require("dotenv").config()

//Send an email when new user is created his account
function sendMail(newUser) {
    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_DETAILS,
            pass: process.env.PASS
        }
    })

    const mailingDetails = {
        from: process.env.USER_DETAILS,
        to: newUser.email,
        subject: "User Details",
        text: `Now you are a user of ShopHub, Your registered 
        information :- 
        FirstName : ${newUser.firstname}
        LastName : ${newUser.lastname}
        Email : ${newUser.email}
        Thank you for creating account in our Website`
    }

    mailTransporter.sendMail(mailingDetails, function (err, data) {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Mail has been successfully sent")
        }
    })
}

// Send OTP to Email 
function sendOTP(generateOTP, email) {
    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_DETAILS,
            pass: process.env.PASS
        }
    })

    const mailingDetails = {
        from: process.env.USER_DETAILS,
        to: email,
        subject: "OTP Confimation Code",
        text: `Your generated OTP is ${generateOTP}`
    }

    mailTransporter.sendMail(mailingDetails, function (err, data) {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Mail send successfully")
        }
    })
}

module.exports = { sendMail, sendOTP }