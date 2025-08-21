import express from "express";
import router from "./Routes/router.js";
import dbConected from "./Connection.js";
import cors from "cors";
import bodyParser from 'body-parser';
dbConected()
const app =express()
app.use(cors())
const PORT=5000;
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
app.use(express.json({limit: '20mb'}));
app.use(express.json())
app.use("/api",router)
app.listen(PORT,()=>{
    console.log("Server Started at ",PORT);
    
})