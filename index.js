import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// app.get("/", (req, res) => {
//   res.send("hello from node server API updated");
// });

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch {
    res.status(500).json({ message: message.error });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body);

    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
    res.status(200).json({ message: `sucessfully deleted this id ${id}` });
  } catch {
    res.status(500).json({
      message: messge.error,
    });
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
