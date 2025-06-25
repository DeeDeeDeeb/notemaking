import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//import rateLimiter from "./middleware/rateLimiter.js";
//const express = require("express") --> for type:commonjs

dotenv.config();


const app = express()
const PORT = process.env.PORT || 5001

connectDB();

app.use(express.json()) //middleware-func runs in the middle btw req and the res
//app.use(rateLimiter)
/*
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});
*/


app.use("/api/notes", notesRoutes);



    
app.listen(5001, () => {
    console.log("Server started on port:", PORT)
})

// mongodb+srv://deekshab2706:17dV1zgdgkTXEIaH@cluster0.xv0g4hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0