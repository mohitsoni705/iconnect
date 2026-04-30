    import express from "express";
    import jwt from "jsonwebtoken";
    import cors from "cors";
    import dotenv from "dotenv";
    import z from "zod";
    import { Socket } from "socket.io";
    import { pool } from "./db/db";
    const app = express();
    app.use(express.json);
    dotenv.config();

    app.post("/",(req,res)=>{
        res.json({
            "message":"Bybybyyy"
        })
    })

    app.post("/signup",async(req,res)=>{
        const {username , password , phonenumber , email } = req.body;
        const response = await pool.query(
            `INSERT INTO users VALUE (
            ${username} , ${phonenumber} , ${email} , ${password} )`
        )

    })
    app.get("/signin",async(req,res)=>{
        const {phonenumber , password} = req.body;
        const response = await pool.query(`
            SELECT `)
    })
    app.listen(8000,()=>{
        console.log("Server started at 8000");
    })
