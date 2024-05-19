const mongoose=require('mongoose');
const User=require('../model/userModel');


const userSignUp = async (req, res) => {
	try {
		const { email } = req.body;
		const {userName}=req.body;

		const userEmail = await User.findOne({ email });
		const user = await User.findOne({ userName });

		
		if (userEmail) {
			return res.send({ message: "Email id already register.", alert: false });
		}
		 if(user){
			return res.send({ message: "userName already exist, try other", alert: false });
		}
		await User.create(req.body);
		res.send({ message: "Successfully sign up", alert: true });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};


const userLogin = async (req, res) => { 
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			const userData = {
				_id: user._id,
				userName: user.userName,
				email: user.email,
			};

			res.send({
				message: "Successfully Logged In",
				alert: true,
				data: userData,
			});
		} else {
			res.send({
				message: "Email is not available, please sign up first Raju",
				alert: false,
			});
		}
	} catch (error) {
		res.send({ message: error.message });
	}
};

module.exports = {
	userSignUp,
	userLogin,
};