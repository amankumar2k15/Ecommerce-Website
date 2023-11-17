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



// Connecting to Database
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, function () {
            console.log(`Server is running on PORT ${process.env.PORT}`)
            console.log("Connecting to Database")
        })
    }).catch((err) => console.log(err))
