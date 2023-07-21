const config = require("config");
module.exports = () => {
	if (
		!(
			config.get("client_id") &&
			config.get("client_secret") &&
			config.get("email") &&
			config.get("pass")
		)
	) {
		console.error(`FATAL ERROR! SET THE PRORPPER ENV VIRIABLES :{
	"client_id": "",
	"client_secret": "",
	"email": "",
	"pass": ""
}
`);
		// process.exit(1);
	}
};
