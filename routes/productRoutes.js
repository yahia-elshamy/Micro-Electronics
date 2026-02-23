const express = require("express");

const router = express.Router();

const {createProduct, getProduct, searchProduct} = require("../controllers/productControllers");

// create POST route for Product model
router.post("/products", createProduct);

// create Get route for Product model 
router.get("/products", getProduct);

// create Search route for Product model 
router.get("/products/:name", searchProduct);

module.exports = router;