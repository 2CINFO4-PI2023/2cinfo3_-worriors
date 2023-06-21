const router = require("express").Router();
const { createUser } = require("../controller/user");

router.post("/", (req, res) => {
	let { firstName, lastName, email, password, birthday, role } = req.body;

	birthday = new Date(
		Date.UTC(
			parseInt(birthday.year),
			parseInt(birthday.month) - 1,
			parseInt(birthday.day)
		)
	);
	console.log(birthday);
	createUser(firstName, lastName, email, password, birthday, role)
		.then((savedUser) => {
			console.log("New user created", savedUser);
			res.status(200).send({ message: "created new user", savedUser });
		})
		.catch((error) => {
			console.error("Error creating user:", error);
			res.status(400).send(error);
		});
});

module.exports = router;
