const  {model, Schema}=require('mongoose');
const userSchema = new Schema({
    userName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	
});
module.exports=model("user", userSchema);