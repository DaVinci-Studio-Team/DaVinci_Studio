const userModel = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utils/hashPassword");

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

const loginUserService = async (email, password) => {
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  } 

  return user;
};

module.exports = {
  registerUserService,
  loginUserService
};
