// require dotenv -------------------------------------------------------
require("dotenv").config();

// require express and use it -------------------------------------------
const express = require("express");
const app = express();

// require mongoose -----------------------------------------------------
const mongoose = require("mongoose");

// initialize port, and mongoURL ----------------------------------------
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

// use middleware -------------------------------------------------------
app.use(express.json());

// import models
const { hash } = require("bcrypt");

// create connection function to the DataBase ---------------------------
const dbConnection = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Successfully connected");
    }
    catch(error) {
        console.log("Failed to connect due to error: ", error);
    }
}

dbConnection();

// require routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api", userRoutes);
app.use("/api", productRoutes);



// listen to the port ---------------------------------------------------
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});