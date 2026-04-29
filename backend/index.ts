import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
import z from "zod";
import { Socket } from "socket.io";


const app = express();
app.use(express.json);
dotenv.config();

app.post("/",(req,res)=>{
    res.json({
        "message":"Bybybyyy"
    })
})

app.post("/signup",(req,res)=>{
    
})
app.listen(8000,()=>{
    console.log("Server started at 8000");
})
