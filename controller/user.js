const User = require("../model/user");
const createUser = async (
  firstName,
  lastName,
  email,
  password,
  birthday,
  role
) => {
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    birthday: birthday,
    role: role,
  });
  return await newUser.save();
};

const getByAttributes = async (attributes) => {
  return await User.find(attributes);
};

const updateUser = async (first) => {};

module.exports = {
  createUser,
};
