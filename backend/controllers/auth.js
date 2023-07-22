const { getUserByEmail } = require("./user");
const bcrypt = require("bcrypt");

const authenticate = async (email, password) => {
	let user = await getUserByEmail(email);
	if (user) {
		let compare = await bcrypt.compare(password, user.password);
		return compare ? { user } : flase;
	} else {
		return false;
	}
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
