require("dotenv").config();
const express = require("express");
const session = require("express-session");
const createError = require("http-errors");

const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");

const passport = require("passport");

const userRouter = require("./router/user");
const authRouter = require("./router/auth");

const app = express();

const dbUrl = "mongodb://localhost/bibcon";

const port = 3000;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to Database...");
  })
  .catch((err) => {
    console.error("Error connection to database:", err);
  });

app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
      dbName: "bibcon",
      collectionName: "sessions",
      stringify: false,
      autoRemove: "interval",
      autoRemoveInterval: 1,
    }),
  })
);

// app.get("/",(req,res) => {
//   res.send('hello world')
// })

app.use("/", authRouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
