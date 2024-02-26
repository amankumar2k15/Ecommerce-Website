const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true, allowNull: true },
    lastname: { type: String, required: true, allowNull: true },
    email: { type: String, required: true, allowNull: true },
    password: { type: String, required: true, allowNull: true },
    type: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    },
    otp: { type: String, default: null },
    otpExpires: { type: Date, default: null }
})

const UserModelEcom = mongoose.model("UserModelEcom", userSchema);

module.exports = UserModelEcom
