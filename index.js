require("express-async-errors");
const express = require("express");

const morgan = require("morgan");

const logger = require("./start/logger");
const error = require("./middlewares/error");

const userRouter = require("./routes/user");
const ticketRoutes = require("./routes/ticket");
const ticketTypeRoutes = require("./routes/ticketType");

const app = express();

require("./start/variables")();
app.use(morgan("dev"));
require("./start/db")();
require("./start/session")(app);
require("./start/passport")();
require("./start/routes")(app);
app.use("/users", userRouter);
// add the tickets route to routes.js
// add the tickets/types route to routes.js

app.use("/tickets/types", ticketTypeRoutes);
app.use("/tickets", ticketRoutes);
app.use(error(logger));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
