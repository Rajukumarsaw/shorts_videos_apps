const Interaction=require("../model/interactionModel");

const getInteractionData=async()=>{
    return await Interaction.find();
}

const postInteractionData=async(req, res)=>{

      try{
           console.log("ok", req.body)
           await Interaction.create(req.body);
           res.send({ message: "user interaction data collected" });  
      } 
      catch(error){
         res.status(500).send({ message: error.message });
      }
}

module.exports={getInteractionData, postInteractionData};


