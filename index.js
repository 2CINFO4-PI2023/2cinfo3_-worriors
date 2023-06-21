const express = require("express");

const app = express();
const port = 3000;
const userRouter = require("./router/user");
const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost/bibcon";

mongoose
	.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connection to Database...");
	})
	.catch((err) => {
		console.error("Error connection to database:", err);
	});

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
