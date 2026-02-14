// require dotenv -------------------------------------------------------
require("dotenv").config();

// require express and use it -------------------------------------------
const express = require("express");
const app = express();

// // require bcrypt to hash password
// const bcrypt = require("bcrypt");

// require mongoose -----------------------------------------------------
const mongoose = require("mongoose");

// initialize port, and mongoURL ----------------------------------------
const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

// use middleware -------------------------------------------------------
app.use(express.json());

// import models
const User = require("./models/User");

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

// create POST route for User model (register)
app.post("/register", async (req, res) =>{
    try {
        //get data
        const {username, email, password, role} = req.body;

        //validate data
        if (!username || !email || !password)
           return res.status(400).json({success: false, msg: "Invalid Data"});
        
        const existUser = await User.findOne({email});
        if (existUser)
            return res.status(400).json({msg: "Account is already exist"}); 

        // // hash the password
        // const hashPassword = await bcrypt.hash(password, 10);

        //create user
        const user = await User.create({
            username,
            email,
            password,
            role
        });
    
        return res.status(201).json({success: true, msg: "User created", data: user});
    }
    catch(error) {
        res.status(500).json({success: false, error: error.message});
    }
});

// create POST route for User model (login)
app.post("/login", async(req, res) =>{
    try {
        const {email, password} = reqq.body;

        if(!email || !password)
            return res.status(201).json({success: false, msg: "Missing Data"});

        const user = await User.findOne({email});
        if (!user) return res.status(404).json({success: false, msg: "Your accout is not found, please create a new one"});

        // const matchPassword = await bcrypt.compare(password, user.password);
        // if(!matchPassword)
        //     return res.status(400).json({success: false, msg: "Invalid Password"});

        // res.status(200).json({success: true, msg: "Success Login"});
    }
    catch(error) {
        res.status(500).json({success: false, error: error.message});
    }
});

// listen to the port ---------------------------------------------------
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});