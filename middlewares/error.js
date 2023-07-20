logger = require("../start/logger");
module.exports = (err, req, res, next) => {
	// logger().error(err);
	console.log(err);
	res.status(500).send("something failed");
};
