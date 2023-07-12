require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const config = require("config");
const winston = require("winston");
const error = require("./middlewares/error");

const app = express();

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf, prettyPrint, colorize, uncolorize } =
	format;

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
	level: "info",
	format: combine(
		colorize(),
		label({ label: "bibcon" }),
		timestamp(),
		prettyPrint(),
		myFormat
	),
	defaultMeta: { service: "user-service " },
	transports: [
		new transports.Console(),
		new transports.File({
			filename: "error.log",
			level: "error",
			format: uncolorize(),
		}),
		new transports.File({ filename: "combined.log", format: uncolorize() }),
	],
});

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
	process.exit(1);
}

app.use(morgan("dev"));
require("./start/db")();
require("./start/session")(app);
require("./start/passport")();
require("./start/routes")(app);
app.use(error(logger));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
