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

router.get("/user", getUsers);
router.get("/user/:userId", getSingleUser);
router.post("/user", signup);
router.post("/user/login", login);
router.post("/user/logout", logout);
router.delete("/user/:userId", deleteUser);

module.exports = router;
