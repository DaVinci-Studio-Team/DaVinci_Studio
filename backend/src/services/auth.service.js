const userModel = require("../models/user.model");
const { hashPassword } = require("../utils/hashPassword");

const registerUserService = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};

module.exports = {
  registerUserService,
};
