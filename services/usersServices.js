import User from "../models/user.js";
import bcrypt from "bcrypt";

const registerUser = async (credentials) => {
  try {
    const { password, email, subscription } = credentials;

    const user = await User.findOne({ email });
    if (user !== null) {
      return null;
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: passwordHash,
      subscription,
    });
    return newUser;
  } catch (error) {}
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (user === null) {
      return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return null;
    }

    return { token: "token", user };
  } catch (error) {}
};
const logoutUser = async (credentials) => {
  return "token bye bye bye";
};

export default {
  registerUser,
  loginUser,
  logoutUser,
};
