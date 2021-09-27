const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
			trim: true,
			lowercase: true,

			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Invalid email");
				}
			},
		},
		password: {
			type: String,
			required: true,
			min: 6,
			trim: true,
		},
		fullname: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

//this is a mongoose middleware that handles the hashing of passwords every time password field is modified
UserSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	//this next param is to make sure that this functions end, otherwise this func will stuck forever thinking it has finished it execution
	next();
});

//custom method for veryfing user by email and password
// P.S:    statics means it accessible by whole collection
UserSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email: email });

	if (!user) throw new Error("Unable to login");

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
