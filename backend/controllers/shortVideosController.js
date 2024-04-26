ShortVideos=require("../model/dataModel");

const postShortVideos=async(req, res)=>{
    await ShortVideos.create(req.body);
    res.status(200).json({message: "videos Uploaded Successfully"})
};
const getAllshortVideos=async(req, res)=>{
   const videos= await ShortVideos.find({});
   res.send(JSON.stringify(videos));
   
};
module.exports={postShortVideos, getAllshortVideos}; 