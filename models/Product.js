const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    discripe: {
        type: String,
        required: true,
        maxlength: 255
    }

}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;