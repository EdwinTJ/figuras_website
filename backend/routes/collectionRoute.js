const express = require("express");
const router = express.Router();
const {
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection
} = require("../controllers/collectionController");
const { check } = require("express-validator");
router.get("/collection", getCollection);
router.post(
  "/collection",
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
  createCollection
);
router.put(
  "/collection/:collectionId",
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
  updateCollection
);
router.delete("/collection/:collectionId", deleteCollection);

module.exports = router;
