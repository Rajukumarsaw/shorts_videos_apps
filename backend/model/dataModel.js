const {Schema, model}= require('mongoose');

const shortVideoSchema=new Schema({
    url:{type:String,
         required:true
    },
    userName:{type:String,
        required:true
   },
   description:{type:String,
    required:true
  },
  song:{type:String,
    required:true
  },
    likes:{type:String,
    required:true
    },
   shares:{type:String,
    required:true
   },
   comments:{type:String,
    required:true
  },


});

const dataModel=model("shortVideo", shortVideoSchema);
module.exports=dataModel;