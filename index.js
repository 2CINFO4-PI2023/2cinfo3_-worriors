const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./router/user");

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
