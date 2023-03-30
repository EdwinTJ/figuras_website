const jwt = require("jsonwebtoken");
const User = require("../models/user");
const HttpError = require("../middleware/http-error");

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers.authorization);
  // make sure token exists
  if (!token) {
    return next(new HttpError("You must log in to access this ressource", 401));
  }

  try {
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new HttpError("You must log in to access this ressource", 401));
  }
};

// admin middleware
exports.isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
    return next(new HttpError("Access denied, you must be an admin", 401));
  }
  next();
};
