const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

const userRouter = require("./router/user");
const ticketRoutes = require('./router/ticket');
const ticketTypeRoutes = require('./router/ticketType');

// app.use(bodyParser.json());
const mongoDBURL = "mongodb://127.0.0.1:27017/bibcon";

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connecté à la base de données');
})
.catch((err=>{
  console.error.bind(console, 'Erreur de connexion à la base de données')
}));

app.use(express.json());

app.use("/user", userRouter);
app.use('/tickets', ticketRoutes);
app.use('/tickets/types', ticketTypeRoutes);






const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
