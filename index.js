const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./router/user");

const {getAllCommand} = require('./controller/commande');
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bibcon")


const testing  = async () => {
	 result = await getAllCommand();
	 console.log(result)
}
testing();

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
