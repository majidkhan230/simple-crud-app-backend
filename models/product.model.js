import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default: 0

    },
    price:{
        type:Number,
        required:true,
        default: 0
    }

},{timestamps:true})


export const Product = mongoose.model("Product",productSchema)