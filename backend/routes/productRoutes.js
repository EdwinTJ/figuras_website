const express = require("express");
const router = express.Router();
const {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductsByUser,
  productCategory,
  getProductById
} = require("../controllers/productController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

router.get("/product", isAuthenticated, isAdmin, getProducts);
router.get("/products/:userId", isAuthenticated, isAdmin, getProductsByUser);
router.get(
  "/products/single/:productId",
  isAuthenticated,
  isAdmin,
  getProductById
);
router.get("/product/categories", isAuthenticated, isAdmin, productCategory);
router.post("/product", isAuthenticated, isAdmin, createProduct);
router.put("/product/:productId", isAuthenticated, isAdmin, updateProduct);
router.delete("/product/:productId", isAuthenticated, isAdmin, deleteProduct);
module.exports = router;
