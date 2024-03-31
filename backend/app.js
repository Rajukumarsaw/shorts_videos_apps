const express=require('express');
require('dotenv').config();
const cors=require('cors');
const {urlencoded}=require('body-parser');
const connectToDb=require("./db");



const app=express();
connectToDb();


//middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/', (req, res)=>{
  res.send("raju kumar");
});

module.exports=app;