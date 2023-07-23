const { getUserByEmail, createUser } = require("./user");

let passportHandler = async (profile) => {
	let { given_name, family_name, email, sub } = profile._json;
	let user = await getUserByEmail(email);
	if (!user) {
		let newUser = createUser({
			firstName: given_name,
			lastName: family_name,
			email,
			role: "reader",
			confirmed: true,
			googleId: sub,
		});
	}
};
module.exports = { passportHandler };
