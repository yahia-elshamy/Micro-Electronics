const express = require("express");

const router = express.Router();

const {addCartController, getCartController, removeItemCartController} = require("../controllers/cartControllers");

router.post("/cart", addCartController);

router.get("/", getCartController);

router.put("/", removeItemCartController);

module.exports = router;