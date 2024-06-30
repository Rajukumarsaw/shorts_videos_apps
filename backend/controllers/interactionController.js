const Interaction=require("../model/interactionModel");

const getInteractionData=async(req,res)=>{
    const interactionData=await Interaction.find();
    res.send(JSON.stringify(interactionData));
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


