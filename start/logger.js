const winston = require("winston");

module.exports = () => {
	const { createLogger, format, transports } = winston;
	const {
		combine,
		timestamp,
		label,
		printf,
		prettyPrint,
		colorize,
		uncolorize,
	} = format;
	const myFormat = printf(({ level, message, label, timestamp }) => {
		return `${timestamp} [${label}] ${level}: ${message}`;
	});
	const logger = createLogger({
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

	return logger;
};
