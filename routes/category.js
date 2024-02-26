const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const { createCategory, getAllCategory } = require("../controller/categoryController")

router.post("/create-category", createCategory)
router.get("/get-category", getAllCategory)

module.exports = router