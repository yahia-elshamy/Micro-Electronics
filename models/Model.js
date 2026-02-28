const mongoose = require("mongoose");

const productItems = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        min: 1
    }
});

const cartShema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [productItems]
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;