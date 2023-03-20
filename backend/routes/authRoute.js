const express = require("express");
const router = express.Router();
const {
  getUsers,
  signup,
  login,
  logout,
  getSingleUser,
  deleteUser
} = require("../controllers/authController");
const { check } = require("express-validator");
router.get("/user", getUsers);
router.get("/user/:userId", getSingleUser);
router.post(
  "/user",
  [
    check("name", "Please add a Name")
      .isLength({ min: 5 })
      .withMessage("must be at least 5 chars long")
      .not()
      .isEmpty()
      .withMessage("Must Enter a Name"),
    check("email", "Please add a valid E-mail")
      .isEmail()
      .withMessage("Must Enter a Valid E-mail"),
    check("password", "Please add a Password")
      .not()
      .isEmpty()
      .withMessage("Must Enter a Password")
  ],
  signup
);
router.post(
  "/user/login",
  [
    check("email", "Please add a valid E-mail")
      .isEmail()
      .withMessage("Must Enter a Valid E-mail"),
    check("password", "Please add a Password")
      .not()
      .isEmpty()
      .withMessage("Must Enter a Password")
  ],
  login
);
router.post("/user/logout", logout);
router.delete("/user/:userId", deleteUser);

module.exports = router;
