import express from "express";
import { AddProduct, GetProduct } from "../Controller/addProduct.js";
import { GetAllUsers, Signin, Signup, UpdateUser} from "../Controller/userSignUp.js";
import { adminSignUp, handelAdminSignIn } from "../Controller/adminSignUp.js";

const router=express.Router()
router.post("/admin-signup",adminSignUp)
router.post("/admin-signin",handelAdminSignIn)
router.post("/signup",Signup)
router.post("/user-update",UpdateUser)
router.post("/signin",Signin)
router.get("/get-user-data",GetAllUsers)
// ---------------AddProduct-----------------
router.post("/add-products",AddProduct)
router.get("/get-products",GetProduct)

export default router