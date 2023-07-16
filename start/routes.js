const express = require("express");
const passport = require("passport");

const auth = require("../routes/auth");
const user = require("../routes/user");

module.exports = (app) => {
	app.use(express.json());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use("/auth", auth);
	app.use("/users", user);

	// Define other routes
	app.get("/", (req, res) => {
		// throw new Error("this is an error");
		res.send("Welcome to the homepage");
	});

	app.get("/dashboard", (req, res) => {
		// Access the authenticated user's details
		res.send("Welcome to the dashboard");
	});

	app.get("/home", (req, res) => {
		res.send("Please log in");
		// Perform the login authentication
		// const { username, password } = req.body;

		// Validate the credentials and authenticate the user
		// ...

		// If authentication is successful
		// if (authenticated) {
		// Save user information to the session
		//   req.session.user = {
		//     id: user.id,
		//     username: user.username,
		// Add other relevant user information
		//   };

		//   res.redirect("/dashboard"); // Redirect the user to the dashboard or any other authorized page
		// } else {
		//   res.redirect("/home"); // Redirect the user back to the login page if authentication fails
		// }
	});

	app.get("/logout", (req, res) => {
		req.logout(req.user, (err) => {
			if (err) return next(err);
			req.session.destroy(); // Destroy the session
			res.redirect("/home"); // Redirect the user to the login page
		}); // Clear the authenticated user session
	});
};
