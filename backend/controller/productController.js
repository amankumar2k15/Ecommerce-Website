const ProductsModelEcom = require("../models/productModel")
const { uploadImg } = require("../middleware/cloudinary");

const createProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new ProductsModelEcom(product);

    try {
        // When only use multer ====>
        // if (!req.file) {
        //     return res.status(500).json({ message: "Error is occuring when requesting a file" })
        // } else if (req.file) {
        //     newProduct.avatar = req.file.path
        // }
        // When only use multer 


        // When use cloudinary =====>
        const uploadResult = await uploadImg(req.file.path, req.file.originalname);

        if (!uploadResult.success) {
            return res.status(500).json({ success: false, message: "Error uploading image" });
        }
        newProduct.avatar = uploadResult.url;
        // When use cloudinary 

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

        const product = await ProductsModelEcom.find(query);
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


// search API
// router.get("/search/:s", async (req, res) => {
//     const s = req.params.s;
//     if (!s) {
//       return res.status(400).json("not found")
//     }
//     try {
//       const products = await Product.find(
//         {
//           $or: [
//             { "title": { $regex: s, $options: "i" } },
//             { "productno": { $regex: s, $options: "i" } },
//             { "desc": { $regex: s, $options: "i" } },
//             { "categories": { $in: [s] } }
//           ]
//         },
//         {
//           title: 1,
//           _id: 1
//         }
//       ).limit(5)

//       return res.status(200).json(products)
//     } catch (error) {
//       console.log(error)
//       return res.status(500).json("internal server error")
//     }
//   })


// API for multiple things - pagination , category, color , size
// router.get("/allinfo", async (req, res) => {
//     const { page = 1, limit = 5 } = req.query;
//     const startIndex = (page - 1) * limit;
//     const qCategory = req.query.category;
//     const qsort = req.query.sort;
//     const qColor = req.query.color;
//     const qSize = req.query.size;
//     const qs = req.query.s;

//     try {
//         let query = Product.find()

//         const filterArr = [];
//         if (qs) filterArr.push({
//             $or: [
//                 { "title": { $regex: qs, $options: "i" } },
//                 { "productno": { $regex: qs, $options: "i" } },
//                 { "desc": { $regex: qs, $options: "i" } },
//                 { "categories": { $in: [qs] } }
//             ]
//         })

//         if (qCategory) filterArr.push({ categories: { $in: [qCategory] } });
//         if (qColor) filterArr.push({ color: { $in: [qColor] } });
//         if (qSize) filterArr.push({ size: { $in: [qSize] } });
//         if (filterArr.length !== 0) {
//             query = query.find({ $and: filterArr });
//         }

//         if (qsort === "Newest") {
//             query.sort({ createdAt: -1 })
//         } else if (qsort === "price-asc") {
//             query.sort({ price: 1 })
//         } else if (qsort === "price-desc") {
//             query.sort({ price: -1 })
//         } else if (qsort === "toppurchased") {
//             query.sort({ purchasedCount: -1 })
//         } else if (qsort === "topRated") {
//             query.sort({ ratingsAverage: -1, ratingsQuantity: -1 })
//         } else if (qsort === "topreviewed") {
//             query.sort({ ratingsQuantity: -1 })
//         }
//         query.skip(startIndex).limit(limit)

//         const products = await query.exec()

//         if (products.length < 1) return res.status(404).json({ message: "No more product Found!" });

//         res.status(200).json(products);


//     } catch (error) {
//         res.status(500).json({ message: "failed to get Product" });
//     }

// });