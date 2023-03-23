const express = require("express");
const router = express.Router();
const {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductsByUser
} = require("../controllers/productController");

router.get("/product", getProducts);
router.get("/products/:userId", getProductsByUser);
router.post("/product", createProduct);
router.put("/product/:productId", updateProduct);
router.delete("/product/:productId", deleteProduct);
module.exports = router;
