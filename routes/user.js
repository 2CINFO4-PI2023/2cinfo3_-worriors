const router = require("express").Router();
const { CreateUser } = require("../controller/user");
const User = require("../model/user");

router.post("/", (req, res) => {
	const { name, email, password } = req.body;
	CreateUser(name, email, password)
		.then((savedUser) => {
			console.log("New user created", savedUser);
		})
		.catch((error) => console.error("Error creating user:", error));
});

module.exports = router;
