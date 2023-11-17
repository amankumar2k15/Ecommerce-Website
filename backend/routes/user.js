const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router()

const { createUser, getAllUser, updateEcomUser, deleteUser, userLogin, sendOtpToMail, verifyOTP, changePassword } = require("../controller/userController")
const { check_Auth, check_Admin } = require("../middleware/check_Auth")

router.post("/create-user", createUser);
router.get("/get-users", getAllUser);
router.patch("/update-user/:id", updateEcomUser);
router.delete("/delete-user/:id", deleteUser);
router.post("/login", userLogin);
router.post("/sendOTP", sendOtpToMail);
router.post("/verifyOTP", verifyOTP);
router.post("/changePassword", changePassword);

module.exports = router