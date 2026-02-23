const User = require("../models/User");

// require bcrypt to hash password
const bcrypt = require("bcrypt");

// create POST route for User model (register)
const register = async (req, res) =>{
    try {
        //get data
        const {username, email, password, role} = req.body;

        //validate data
        if (!username || !email || !password)
           return res.status(400).json({success: false, msg: "Invalid Data"});
        
        const existUser = await User.findOne({email});
        if (existUser)
            return res.status(400).json({msg: "Account is already exist"}); 

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role
        });
    
        return res.status(201).json({success: true, msg: "User created", data: user});
    }
    catch(error) {
        res.status(500).json({success: false, error: error.message});
    }
};

// create POST route for User model (login)
const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password)
            return res.status(400).json({success: false, msg: "Missing Data"});

        const user = await User.findOne({email});
        if (!user) return res.status(404).json({success: false, msg: "Your account is not found, please create a new one"});

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword)
            return res.status(400).json({success: false, msg: "Invalid Password"});

        res.status(200).json({success: true, msg: "Success Login"});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}

module.exports = {
    register,
    login
};