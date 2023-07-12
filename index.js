const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();




const userRouter = require("./router/user");
const ticketRoutes = require('./router/ticket');
const ticketTypeRoutes = require('./router/ticketType');

app.use(bodyParser.json());

app.use('/api', ticketRoutes);
app.use('/api', ticketTypeRoutes);

app.use(express.json());
app.use("/user", userRouter);

const mongoDBURL = 'mongodb://127.0.0.1:27017/bibconnect';
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données'));
db.once('open', () => {
  console.log('Connecté à la base de données');
});

const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
