const express = require("express");
const passport = require("passport");
const { authenticate } = require("../controllers/auth");

const router = express.Router();

router.get(
	"/google",
	passport.authenticate("google", {
		scope: [
			"profile",
			"email",
			"https://www.googleapis.com/auth/user.birthday.read",
		],
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: "/dashboard", // Redirect after successful authentication
		failureRedirect: "/login", // Redirect if authentication fails
	})
);

router.post("/login", async (req, res) => {
	let { email, password } = req.body;
	let authUser = await authenticate(email, password);
	if (authUser) {
		req.session.passport = {
			user: {
				_id: authUser.id,
				email: authUser.email,
				confirmed: authUser.confirmed,
				role: authUser.role,
			},
		};
		res.send(authUser); //? might redirect instead
	} else {
		res.status(404).send("not found");
	}
});

module.exports = router;
