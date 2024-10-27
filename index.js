import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";


const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello from node server API updated");
});

app.post("/api/products", async (req, res) => {
 try {
   const product =  await Product.create(req.body)
    res.status(200).json(product);
 } catch (error) {
    res.status(500).json({message:message.error})
 }
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connection established");
  })
  .catch(() => {
    console.log("connection failed");
  });
