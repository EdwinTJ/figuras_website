const express = require("express");
const router = express.Router();
const {
  getProducts,

  createProduct
} = require("../controllers/productController");

router.get("/product", getProducts);
router.post("/product", createProduct);

module.exports = router;
