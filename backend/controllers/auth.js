const { getUserByEmail } = require("./user");
const bcrypt = require("bcrypt");

const authenticate = async (email, password) => {
	return getUserByEmail(email).then((user) =>
		!user ? false : bcrypt.compare(password, user.password) ? user : false
	);
};

let encrypt = async (password) => {
	const saltRound = 10;
	let salt = await bcrypt.genSalt(saltRound);
	let hashed = await bcrypt.hash(password, salt);
	return hashed;
};

module.exports = {
	authenticate,
	encrypt,
};
