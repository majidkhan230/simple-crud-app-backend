require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");



const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello from node server API updated");
});


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('connection established')
})
.catch(()=>{
    console.log("connection failed")
})