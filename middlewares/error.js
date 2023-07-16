module.exports = (logger) => {
	return (err, req, res, next) => {
		logger.info(err);
		res.status(500).send("something failed");
	};
};
