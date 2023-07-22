module.exports = (req, res, next) => {
	console.log(req.session);
	if (!req.session.passport) {
		console.log("auth middleware");
		return res.status(401).send("access denied, not authenicated");
	}
	next();
};
