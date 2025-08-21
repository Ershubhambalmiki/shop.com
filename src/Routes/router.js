import express from "express";
import { AddProduct, GetProduct } from "../Controller/addProduct.js";
import { GetAllUsers, Signin, Signup } from "../Controller/userSignUp.js";

const router=express.Router()
router.post("/signup",Signup)
router.post("/signin",Signin)
router.get("/get-user-data",GetAllUsers)
// ---------------AddProduct-----------------
router.post("/add-products",AddProduct)
router.get("/get-products",GetProduct)

export default router