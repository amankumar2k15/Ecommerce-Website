const express = require("express");
const cloudinary = require('cloudinary').v2;
require("dotenv").config()

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImg = async (image, name) => {
    try {
        const result = await cloudinary.uploader.upload(image, {
            public_id: `ShopHub/${name}`, // Include the "ShopHub" folder in the public_id
        });

        return {
            success: true,
            url: result.secure_url
        };

    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
};

const deleteImg = async (name) => {
    try {
        const result = await cloudinary.uploader.destroy(name)
        console.log(result)
        return { success: true }
    } catch (error) {
        console.log(error)
        return { success: false, error: error }
    }
}

module.exports = { uploadImg, deleteImg };