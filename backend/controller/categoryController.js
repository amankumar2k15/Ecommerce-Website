const CategoryModelEcom = require("../models/categoryModel")

const createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = new CategoryModelEcom(category);

    try {
        await newCategory.save();

        return res.status(201).json({ message: "Category created successfully", result: newCategory })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const getAllCategory = async (req, res) => {

    try {
        const category = await CategoryModelEcom.find({})
        if (!category) return res.status(400).json({ message: "Category does not found" })

        return res.status(200).json({
            message: "Category fetched successfully",
            result: category,
            count: category.length
        })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { createCategory, getAllCategory }