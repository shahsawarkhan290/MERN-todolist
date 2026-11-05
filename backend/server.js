import express from  "express";
import mongoose from "mongoose"
import {connectDB} from "./config/db.js";
import todoRoutes from "./routes/todo.route.js"

const app=express();

 app.get("/",(req,res)=>{
res.send("server is working well");
});

app.use(express.json());

app.use("api/todos",todoRoutes) 

app.listen(5000,()=>{
    console.log("server started ");
}); 