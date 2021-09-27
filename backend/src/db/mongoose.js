const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGOOSE_URI;

mongoose.connect(
	URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log("Connected to Mongoose!!");
	}
);
