const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const upload = require('../middleware/upload')

const apicache = require('apicache')

// for caching-----------
let cache = apicache.middleware

const { createProduct, getAllProduct } = require('../controller/productController')

router.post("/create-product", upload.single("avatar"), createProduct)
router.get("/get-products", cache("5 minutes"), getAllProduct)

module.exports = router