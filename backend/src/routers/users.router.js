const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

//create a user
router.post("/", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const fullname = req.body.fullname;

	const user = new User({
		email,
		password,
		fullname,
	});

	try {
		await user.save();
		res.status(201).send(user);
	} catch (err) {
		res.status(400).send(err);
	}
});

//get a user or login
router.post("/login", async (req, res) => {
	try {
		//this is a custom method on whole User Collection
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);

		res.send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
