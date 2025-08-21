import { productModel } from "../Model/productModel.js"

export const AddProduct = async (req, res) => {
    let { name, brand, category, price, quantity, sizes, color, image, description } = req.body
    try {
        if (!name.trim().toLowerCase() || !brand.trim().toLowerCase() || !category.trim().toLowerCase() || !price || !quantity || !sizes || !color.trim().toLowerCase() || !image.trim().toLowerCase() || !description.trim().toLowerCase()) {
            res.status(400).json({ message: "All Field Is Requard" })
            return;
        }
        const addProduct = await productModel.create({
            name,
            brand,
            category,
            price,
            quantity,
            sizes,
            color,
            image,
            description

        })
        res.status(200).json({ message: "Product Aded", addProduct })
    } catch (error) {
        res.status(500).json({ message: "somethin whant wrong" + error })

    }
}

export const GetProduct= async(req,res)=>{
try {
   const getAllProduct=  await productModel.find({}).sort({created_at: -1})
 res.status(200).json({message:"Get All Product",getAllProduct})
} catch (error) {
     res.status(500).json({ message: "somethin whant wrong" + error })
}
}