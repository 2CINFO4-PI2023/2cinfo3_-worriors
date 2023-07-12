const mongoose = require("mongoose");

module.exports = () => {
  // Connect to MongoDB
  mongoose
    .connect("mongodb://localhost:27017/passport", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection to MongoDB...");
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
