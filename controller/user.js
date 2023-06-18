const User = require("../model/user");

const CreateUser = (name, email, password) => {
	const newUser = new User({
		name: name,
		email: email,
		password: password,
	});
	

	return newUser.save();
};

module.exports = {
	CreateUser,
};

