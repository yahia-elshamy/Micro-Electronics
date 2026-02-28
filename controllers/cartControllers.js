const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");

const addCartController = async (req, res) =>{
    try {
        const {userId, productId, quantity} = req.body;

        if(!userId || !productId || !quantity)
            return res.status(400).json({msg: "Missing Data"});

        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({msg: "User not found"});

        const product = await Product.findById(productId);
        if(!product)
            return res.status(404).json({msg: "Product not found"});

        if (quantity > product.quantity)
            return res.json({msg: "Quantity large stock"});

        let cart = await Cart.find({user: userId});

        if (!cart) 
            cart = await Cart.Create({user, item: [], })
    }
    catch(error) {

    }
}

const getCartController = async (req, res) =>{
    try {

    }
    catch(error) {

    }
}
// remove item
const removeItemCartController = async (req, res) =>{
    try {

    }
    catch(error) {

    }
}

module.exports = {
    addCartController,
    getCartController,
    removeItemCartController
}