const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        allowNull: true
    }
}, { timestamps: true })

const CategoryModelEcom = mongoose.model("CategoryModelEcom", categorySchema)

module.exports = CategoryModelEcom

