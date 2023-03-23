const express = require("express");
const router = express.Router();
const {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct
} = require("../controllers/productController");

router.get("/product", getProducts);
router.post("/product", createProduct);
router.put("/product/:productId", updateProduct);
router.delete("/product/:productId", deleteProduct);
module.exports = router;
