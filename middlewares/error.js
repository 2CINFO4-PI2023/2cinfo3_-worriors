module.exports = (logger) => {
	return (err, req, res, next) => {
		logger.error(err);
		res.status(500).send("something failed");
	};
};
