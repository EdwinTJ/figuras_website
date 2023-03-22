const Product = require("../models/product");
const Category = require("../models/category");
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    img: {
      public_url: "https://res.cloudinary.com/dzqkqzjxw/image/upload/v1621361",
      url: "https://res.cloudinary.com/dzqkqzjxw/image/upload/v1621361"
    },
    collection: "c1",
    user: "u1"
  },
  {
    id: "p2",
    name: "Pizza",
    description: "Finest fish and veggies",
    price: 22.99,
    img: {
      public_url: "https://res.cloudinary.com/dzqkqzjxw/image/upload/v1621361",
      url: "https://res.cloudinary.com/dzqkqzjxw/image/upload/v1621361"
    },
    collection: "c2",
    user: "u2"
  }
];

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
  const { name, description, price, img, collection, user } = req.body;
  const updatedProduct = {
    name,
    description,
    price,
    img,
    collection,
    user
  };
  try {
    const product = DUMMY_PRODUCTS.find(p => p.id === productId);
    product.name = updatedProduct.name;
    product.description = updatedProduct.description;
    product.price = updatedProduct.price;
    product.img = updatedProduct.img;
    product.collection = updatedProduct.collection;
    product.user = updatedProduct.user;
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(200).json({ success: true, message: "Update product" });
};

//Delete a product
exports.deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = DUMMY_PRODUCTS.filter(p => p.id !== productId);
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
