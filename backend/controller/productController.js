const ProductModelEcom = require("../models/productModel")

const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new ProductModelEcom(product);

    try {
        if (!req.file) {
            return res.status(500).json({ message: "Error is occuring when requesting a file" })
        } else if (req.file) {
            newProduct.avatar = req.file.path
        }

        await newProduct.save()
        return res.status(201).json({
            message: "Product created successfully",
            result: newProduct
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAllProduct = async (req, res) => {
    try {
        let query = {}; // Empty object to hold potential query conditions

        // Check if the request has a "categoryName" query parameter
        if (req.query.categoryName) {
            query.categoryName = req.query.categoryName;
        }

        // Check if the request has a "brand" query parameter
        if (req.query.brand) {
            query.brand = req.query.brand
        }

        // Check for minimum and maximum price query parameters
        if (req.query.minPrice && req.query.maxPrice) {
            query.price = {
                $gte: parseFloat(req.query.minPrice),
                $lte: parseFloat(req.query.maxPrice)
            };
        }

        // Check if the request has a "searchQuery" query parameter
        if (req.query.searchQuery) {
            query.$text = { $search: req.query.searchQuery }
        }


        console.log("Query conditions:", query);

        const product = await ProductModelEcom.find(query);
        if (!product) {
            return res.status(400).json({ message: "Products does not found" })
        }

        return res.status(200).json({
            message: "Product fetched successully",
            result: product,
            count: product.length
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { createProduct, getAllProduct } 