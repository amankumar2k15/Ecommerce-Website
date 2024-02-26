// const multer = require('multer');

// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

// module.exports = upload

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype === "images/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/webp") {
            callback(null, true)
        }
        else {
            console.log("Only jpg, png, jpeg, webp images are supported")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;
