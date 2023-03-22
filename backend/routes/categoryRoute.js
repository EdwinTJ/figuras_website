const express = require("express");
const router = express.Router();
const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");
const { check } = require("express-validator");

router.get("/category", getCategory);
router.post(
  "/category",
  [
    check("name", "Name is required")
      .not()
      .isEmpty()
      .withMessage("Name must have at least three(3) characters")
      .isLength({ min: 3 })
      .withMessage("Name must have at least three(3) characters")
      .isLength({ max: 32 })
      .withMessage("Name must have at most thirty-two(32) characters")
  ],
  createCategory
);
router.put(
  "/category/:categoryId",
  [
    check("name", "Name is required")
      .not()
      .isEmpty()
      .withMessage("Name must have at least three(3) characters")
      .isLength({ min: 3 })
      .withMessage("Name must have at least three(3) characters")
      .isLength({ max: 32 })
      .withMessage("Name must have at most thirty-two(32) characters")
  ],
  updateCategory
);
router.delete("/category/:categoryId", deleteCategory);

module.exports = router;
