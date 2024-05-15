const mongoose=require('mongoose');
const User=require('../model/userModel');


const userSignUp = async (req, res) => {
	try {
		const { email } = req.body;

		const user = await User.findOne({ email });

		
		if (user) {
			res.send({ message: "Email id already register.", alert: false });
		}
		await User.create(req.body);
		res.send({ message: "Successfully sign up", alert: true });
	} catch (error) {
		res.send({ message: error.message });
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
				message: "Login Successfull",
				alert: true,
				data: userData,
			});
		} else {
			res.send({
				message: "Email is not available, please sign up first",
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