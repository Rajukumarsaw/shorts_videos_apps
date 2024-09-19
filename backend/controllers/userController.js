const mongoose = require('mongoose');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');

const userSignUp = async (req, res) => {
	try {
		const { email, userName, password } = req.body;

		const userEmail = await User.findOne({ email });
		const user = await User.findOne({ userName });

		if (userEmail) {
			return res.send({ message: "Email id already register.", alert: false });
		}
		if (user) {
			return res.send({ message: "userName already exist, try other", alert: false });c
		}

		// Hash the password
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		// Create user with hashed password
		await User.create({ ...req.body, password: hashedPassword });
		res.send({ message: "Successfully sign up", alert: true });
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
};

const userLogin = async (req, res) => { 
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (user) {
			// Compare the provided password with the stored hashed password
			const isPasswordValid = await bcrypt.compare(password, user.password);

			if (isPasswordValid) {
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
					message: "Invalid email or password",
					alert: false,
				});
			}
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