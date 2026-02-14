require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

app.use(express.json());

const dbConnection = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Successfully connected");
    }
    catch(error) {
        console.log("Failed to connect");
    }
}

dbConnection();

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});