const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const config = require("config");

// Configure Google OAuth 2.0 strategy
// const { web } = require("../client-secret.json"); //! this should be a env variable
const { authenticate } = require("../controllers/auth");
const { getUserByEmail } = require("../controllers/user");
const { passportHandler } = require("../controllers/passport");

module.exports = () => {
	passport.use(
		new GoogleStrategy(
			{
				// clientID: web.client_id,
				// clientSecret: web.client_secret,
				clientID: config.get("client_id"),
				clientSecret: config.get("client_secret"),
				callbackURL: "/auth/google/callback",
			},
			(accessToken, refreshToken, profile, done) => {
				passportHandler(profile)
					.then(() => {
						done(null, profile);
					})
					.catch((err) => {
						return done(err);
					});
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((user, done) => {
		done(null, user);
	});
};
