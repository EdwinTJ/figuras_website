const Product = require("../models/product");
const HttpError = require("../middleware/http-error");

//Create a product
exports.createProduct = async (req, res, next) => {
  const { name, description, price, image, category, creator } = req.body;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      image,
      category,
      creator
    });
    res.status(201).json({
      success: true,
      product
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Get a single product
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .populate("creator", "name");
    res.status(201).json({
      success: true,
      products
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Update a product
exports.updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { name, description, price, image, category } = req.body;
  const updatedProduct = {
    name,
    description,
    price,
    image,
    category
  };
  try {
    await Product.findByIdAndUpdate({ _id: productId }, updatedProduct);
  } catch (error) {
    return next(
      new HttpError("Updating product went wrong, please try again", 500)
    );
  }
  res.status(200).json({ success: true, updatedProduct });
};

//Delete a product
exports.deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete({ _id: productId });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
