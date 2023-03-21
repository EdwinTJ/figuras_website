const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductsById,
  getProductsByUser,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/product", getProducts);
router.get("/product/:productId", getProductsById);
router.get("/product/user/:userId", getProductsByUser);
router.get("/product/collection/:collectionId", getProductsByCategory);
router.post("/product", createProduct);
router.put("/product/:productId", updateProduct);
router.delete("/product/:productId", deleteProduct);

module.exports = router;
