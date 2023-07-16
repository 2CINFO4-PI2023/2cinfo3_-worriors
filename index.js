require("express-async-errors");
const express = require("express");
const morgan = require("morgan");

const logger = require("./start/logger");
const error = require("./middlewares/error");

const app = express();

require("./start/variables")();
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
