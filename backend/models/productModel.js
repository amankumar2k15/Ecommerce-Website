const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "CategoryModelEcom"
    },
    categoryName: { type: String, required: true, allowNull: true },
    title: { type: String, required: true, allowNull: true },
    price: { type: Number, required: true, allowNull: true },
    description: { type: String, required: true, allowNull: true },
    isnew: { type: Boolean, required: true, allowNull: true },
    brand: { type: String, required: true, allowNull: true },
    rating: { type: Number, required: true, allowNull: true },
    avatar: {
        type: String
    },

}, { timestamps: true });


// --------------------------------For searchQuery--------------------------------
productSchema.index({
    title: 'text',
    description: 'text',
    brand: 'text'
});
// --------------------------------For searchQuery--------------------------------



const ProductModelEcom = mongoose.model("ProductModelEcom", productSchema);

module.exports = ProductModelEcom

