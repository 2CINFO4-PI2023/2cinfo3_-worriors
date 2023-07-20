module.exports = (req, res, next) => {
	if (!req.session.passport && req.session.passport.user.role !== "admin") {
		console.log(req.session.passport);
		return res.status(403).send("access denied");
	}
	next();
};
