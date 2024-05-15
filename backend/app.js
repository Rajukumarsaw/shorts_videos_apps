const express=require('express');
require('dotenv').config();
const cors=require('cors');
const {urlencoded}=require('body-parser');

const connectToDb=require("./db");
const videoRoute=require('./routes/videosRoute');
const userRoute=require("./routes/userRoute");

const app=express();
connectToDb();


//middleware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use('/shortVideos',videoRoute);
app.use('/user',userRoute);

module.exports=app;