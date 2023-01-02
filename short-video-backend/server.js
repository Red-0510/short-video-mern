import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Video from "./dbModel.js";
//App Config
const app=express();
const port = process.env.PORT || 9000;
const connectionURL = "mongodb://localhost:27017/shotVideoDB";

//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.set("strictQuery",false);
mongoose.connect(connectionURL,{
    useNewURLParser:true,
});


//API Endpoints
//GET requests
app.get("/",(req,res)=>{
    res.status(200).send("Jaines Don");
});

//getting all data from server
app.get("/v2/posts",(req,res)=>{
    Video.find({},(err,data)=>{
        if(err) res.status(500).send(err);
        else res.status(200).send(data);
    })
})


//POST requests

app.post("/v2/posts",(req,res)=>{
    const video = req.body;
    Video.create(video,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else res.status(201).send(data);
    });
});

// Listening
app.listen(port,()=>console.log(`Server is listening at localhost:${port}`))