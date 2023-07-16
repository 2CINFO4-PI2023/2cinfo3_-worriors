const User = require("../models/user");

const createUser = async (attirbutes) => {
	// validate the attributes
	try {
		
		const newUser = new User(attirbutes);
		return await newUser.save();
	} catch (error) {
		return 
	}
};

const getAllUsers = async () => {
	return await getUserByAttributes({});
};

const getUserByAttributes = async (attributes) => {
	return await User.find(attributes);
};

const getUserById = async (id) => {
	let result = await getUserByAttributes({ _id: id });
	return result[0];
};

const getUserByEmail = async (email) => {
	let result = await getUserByAttributes({ email: email });
	return result[0];
};

const updateUser = async (id, attributes) => {
	// let user = await getUserById(id);
	// user = { user, ...attributes };
	// return user.save();
	console.log({ attributes });
	let user = await User.findOneAndUpdate({ _id: id }, attributes);
	console.log(user);
	return user;
};

const deleteUser = async (id) => {
	let user = await User.findByIdAndDelete(id);
	return user;
};

module.exports = {
	createUser,
	getAllUsers,
	getUserByAttributes,
	getUserById,
	getUserByEmail,
	updateUser,
	deleteUser,
};
