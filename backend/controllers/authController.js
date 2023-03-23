const User = require("../models/user");
const HttpError = require("../middleware/http-error");
const { validationResult } = require("express-validator");

//Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create a user (signup)
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(
      new HttpError("Email already exists,please provide another email", 400)
    );
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
      products: [],
      role
    });
    res.status(201).json({ success: true, user });
  } catch (error) {
    return next(new HttpError("Something went wrong, please try again", 500));
  }
};

//Login a user
exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new HttpError("E-mail and password are required", 400));
    }

    // check user e-mail
    const user = await User.findOne({ email });
    if (!user) {
      return next(new HttpError("Invalid credentials", 400));
    }

    // verify user password
    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return next(new HttpError("Invalid credentials", 400));
    }

    generateToken(user, 200, res);
  } catch (error) {
    console.log(error);

    next(new HttpError("Cannot log in, check your credentials", 400));
  }
};

const generateToken = async (user, statusCode, res) => {
  const token = await user.jwtGenerateToken();

  const options = {
    expires: new Date(new Date().getTime() + 5 * 60 * 1000),
    httpOnly: true
  };

  res
    .status(statusCode)
    .cookie("token", token, { ...options, secure: false })
    .json({ success: true, token });
};

//Logout a user
exports.logout = async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out"
  });
};

//Get a single user
exports.getSingleUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    res.status(200).json({ success: true, user });
  } catch (error) {
    return next(new HttpError("Something went wrong, please try again", 500));
  }
};

//Delete a user
exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    return next(new HttpError("Something went wrong, please try again", 500));
  }
};
