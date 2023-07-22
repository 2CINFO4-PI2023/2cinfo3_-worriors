const mongoose = require("mongoose");
const { Schema } = mongoose;

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
	phone: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
	},
	passwordHash: {
		type: String,
	},
	likedBooks: [
		{
			type: Schema.Types.ObjectId,
			ref: "Book",
		},
	],
	purchased: [
		{
			type: Schema.Types.ObjectId,
			ref: "Book",
		},
	],
	cart: [
		{
			book: {
				type: Schema.Types.ObjectId,
				ref: "Book",
			},
			quantity: {
				type: Number,
				default: 1,
			},
		},
	],
	favorites: [
		{
			type: Schema.Types.ObjectId,
			ref: "Book",
		},
	],

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
