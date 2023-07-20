

const crypto = require("crypto");
const router = require("express").Router();

const {
	createUser,
	getAllUsers,
	updateUser,
	getUserById,
	deleteUser,
} = require("../controllers/user");
const { sendConfirmationEmail } = require("../start/nodemailer");
const { encrypt } = require("../controllers/auth");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin");

router.get("/all", auth, admin, (req, res) => {
	getAllUsers().then((users) => {
		res.send(users);
	});
	
});

router.get("/me", auth, (req, res) => {
	let _id = req.session.passport.user;
	getUserById(_id).then((user) => {
		console.log(user);
		res.send(user);
	});
});

router.get("/confirm/:token", auth, (req, res) => {
	const { token } = req.params;
	let user = req.session.passport.user;

	// Check if the confirmation token from the URL matches the one stored in the session data
	if (user.token === token) {
		getUserById(user._id)
			.then((user) => {
				// Clear the session data
				req.session.passport.user.confirmed = true;
				delete req.session.passport.user.token;
				user.confirmed = true;
				return user.save();
			})
			.then(() => res.send("confirmation-success"));
	} else {
		res.status(400).send("confirmation-error");
	}
});

router.post("/register", async (req, res) => {
	// throw new Error("this is an error");
	let { firstName, lastName, email, password, birthday, role } = req.body;
	//! validate input
	birthday = new Date(
		Date.UTC(
			parseInt(birthday.year),
			parseInt(birthday.month) - 1,
			parseInt(birthday.day)
		)
	);
	let hashedPassword = await encrypt(password);

	let savedUser = await createUser({
		firstName,
		lastName,
		email,
		password: hashedPassword,
		birthday,
		role,
		confirmed: false,
	});

	console.log("New user created", savedUser);
	let token = crypto.randomBytes(32).toString("hex");
	const confirmationLink = `http://localhost:3000/users/confirm/${token}`;
	// sendConfirmationEmail(savedUser.email, confirmationLink);
	req.session.passport = {
		user: {
			_id: savedUser.id,
			email: savedUser.email,
			confirmed: savedUser.confirmed,
			role: savedUser.role,
			token,
		},
	};
	res.status(200).send({ message: "created new user", savedUser });
	//? redirect to login to auth either on the backend or on the front
});

router.patch("/:id", async (req, res) => {
	let attirbutes = { ...req.body };
	let id = req.params.id;
	console.log("routes att", { attirbutes });
	let user = await updateUser(id, attirbutes);
	res.send(`user updated: ${user}`);
});

router.patch("/me", auth, async (req, res) => {
	// ! user with limited access: exclude [role confirmed id google...]
	let attirbutes = { ...req.body }; //! use lodash
	let id = req.session.passport.user._id;

	console.log("routes att", { attirbutes });

	let user = await updateUser(id, attirbutes);

	res.send(`user updated: ${user}`);
});

router.delete("/:id", auth, admin, async (req, res) => {
	let user = await deleteUser(req.params.id);
	res.status(200).send({ message: "user deleted", user });

});

module.exports = router;
