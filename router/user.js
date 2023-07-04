const router = require("express").Router();
const { createUser, getAllUsers } = require("../controller/user");

router.get("/all", (req, res) => {
  getAllUsers()
    .then((users) => {
      // authorisation here
      res.send(users);
    })
    .catch((err) => {
      res.status(404).error;
    });
});

router.get("/me", (req, res) => {});

router.post("/", (req, res) => {
  let { firstName, lastName, email, password, birthday, role } = req.body;

  birthday = new Date(
    Date.UTC(
      parseInt(birthday.year),
      parseInt(birthday.month) - 1,
      parseInt(birthday.day)
    )
  );

  console.log(birthday);
  createUser(firstName, lastName, email, password, birthday, role)
    .then((savedUser) => {
      console.log("New user created", savedUser);
      res.status(200).send({ message: "created new user", savedUser });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      res.status(400).send(error);
    });
});

router.put("/:id", (req, res) => {
  let attirbutes = res.body;
});

module.exports = router;
