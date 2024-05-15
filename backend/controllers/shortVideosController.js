const ShortVideos=require("../model/dataModel");

const postShortVideos=async(req, res)=>{
    await ShortVideos.create(req.body);
    res.status(200).json({message: "videos Uploaded Successfully"})
};
const getAllshortVideos=async(req, res)=>{
   const videos= await ShortVideos.find({});
   res.send(JSON.stringify(videos));
   
};
const editStats=async(req,res)=>{
    try {
        await ShortVideos.findByIdAndUpdate(req.params.id, req.body);
   
       res.status(200).json({
         success: true,
         message: "Data updated successfully",
       });
    } catch (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: "nhi hua",
        });
      }
    }
module.exports={editStats, postShortVideos, getAllshortVideos}; 