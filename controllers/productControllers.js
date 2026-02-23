const User = require("../models/User");
const Product = require("../models/Product");

// create POST route for Product model
const createProduct = async (req, res) => {
    try {
        const {userId, name, price, quantity, discripe} = req.body;
        const user = await User.findById(req.body.userId);
        if (user.role !== "admin")
            return res.status(404).json({success: false, msg: "User not authorized to create a product"});

        const product = await Product.create({
            name,
            price,
            quantity,
            discripe
        });

        return res.status(201).json({success: true, msg: "Product created", data: product})
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// create Get route for Product model 
const getProduct = async (req, res)=>{
    try {
        const get_products = await Product.find();
        return res.status(200).json({success: true, data: get_products});
    }
    catch(error){
        res.status(500).json({success: false, error: error.message});
    }
};

// create Search route for Product model 
const searchProduct = async (req, res)=>{
    try {
        const productName = req.params.name.toLowerCase();
        const product = await Product.findOne({name: productName});
        if (!product)
            return res.status(404).json({success: false, msg: "Product not found"});

        return res.status(200).json({success: true, data: product});
        
        }
    catch(error){
        res.status(500).json({success: false, error: error.message});
    }
};

module.exports = {
    createProduct,
    getProduct,
    searchProduct
};