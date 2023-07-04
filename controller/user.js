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

const getAllUsers = async () => {
  return await getByAttributes({});
};

const getUserById = async (id) => {
  return await getByAttributes({ id: id });
};

const getByAttributes = async (attributes) => {
  return await User.find(attributes);
};

const updateUser = async ({ id, attributes }) => {
  return await User.findByIdAndUpdate(id, attributes);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
};
