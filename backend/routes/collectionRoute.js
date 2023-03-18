const express = require("express");
const router = express.Router();
const {
  getCollection,
  createCollection,
  updateCollection,
  deleteCollection
} = require("../controllers/collectionController");

router.get("/collection", getCollection);
router.post("/collection", createCollection);
router.put("/collection/:collectionId", updateCollection);
router.delete("/collection/:collectionId", deleteCollection);

module.exports = router;
