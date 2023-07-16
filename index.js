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
// add the tickets route to routes.js
// add the tickets/types route to routes.js
app.use("/users", userRouter);
app.use('/tickets/types', ticketTypeRoutes);
app.use('/tickets', ticketRoutes);


const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
