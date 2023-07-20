const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

module.exports = (app) => {
  // Create a new MongoDBStore instance
  const store = new MongoDBStore({
    uri: "mongodb://localhost:27017/passport",
    collection: "sessions",
  });

  // Catch errors
  store.on("error", function (error) {
    console.log(error);
  });

  // Configure session middleware
  app.use(
    session({
      secret: "YOUR_SESSION_SECRET",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );
};
