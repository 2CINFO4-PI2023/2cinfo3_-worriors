module.exports = (req, res, next) => {
	if (!req.session.passport) {
		console.log("auth middleware");
		return res.status(401).send("access denied, not authenicated");
	}
	next();
};
