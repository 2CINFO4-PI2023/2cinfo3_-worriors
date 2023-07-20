const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	birthday: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
	},

	role: {
		type: String,
		enum: ["admin", "reader", "author"],
		required: true,
	},
	books: {
		type: [mongoose.Types.ObjectId],
		ref: "Book",
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
