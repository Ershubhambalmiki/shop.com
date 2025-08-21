import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
    quantity: Number,
    sizes: [String],
    color: String,
    image: String,
    description: String
})

export const productModel = mongoose.model("add-product", productSchema)
