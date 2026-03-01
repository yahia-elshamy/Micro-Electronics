require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

async function dbConnection() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
}
dbConnection();

// Require Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Endpoints
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

// Run Server
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});