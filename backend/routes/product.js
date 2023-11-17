const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const upload = require('../middleware/upload')

const { createProduct, getAllProduct } = require('../controller/productController')

router.post("/create-product", upload.single("avatar"), createProduct)
router.get("/get-products", getAllProduct)

module.exports = router