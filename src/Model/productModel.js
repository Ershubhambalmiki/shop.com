import mongoose from "mongoose";
import counterModel from "./id.js";

const productSchema = new mongoose.Schema({

    id: { type: Number, unique: true },
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

productSchema.pre("save", async function (next) {
    if (this.isNew) {
        try {
            const counter = await counterModel.findOneAndUpdate(
                { id: "productId" },        
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            );
            this.id = counter.seq;   
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});
export const productModel = mongoose.model("add-product", productSchema)


