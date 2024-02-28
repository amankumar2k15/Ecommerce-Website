const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config()

const user = require("./routes/user")
const category = require('./routes/category')
const product = require('./routes/product')


const app = express()

app.use(bodyParser.json({ extended: true, limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ extended: true, limit: "5mb" }));

app.use("/uploads", express.static("uploads"))

app.use("/user", user)
app.use("/category", category)
app.use("/product", product)

const PORT = process.env.PORT || 8800


// Connecting to Database

// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => {
//         app.listen(process.env.PORT, function () {
//             console.log(`Server is running on PORT ${PORT}`)
//             console.log("Connecting to Database")
//         })
//     }).catch((err) => console.log(err))


// For Docker ====>
// mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@mongodbcontainername:27017/test`)
mongoose.connect(`mongodb+srv://amankumar2k15:amankumar2662@clustor0.9bcinws.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(process.env.PORT, function () {
            console.log(`Server is running on PORT ${PORT}`)
            console.log("Connecting to Database")
        })
    }).catch((err) => console.log(err))
