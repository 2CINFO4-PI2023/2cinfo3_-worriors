const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
  });

const userRouter = require("./routes/user");
const ticketRoutes = require('./routes/ticket');
const ticketTypeRoutes = require('./routes/ticketType');

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
