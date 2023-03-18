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
//Display all products
exports.getProducts = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, products: DUMMY_PRODUCTS });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Display a single product
exports.getProductsById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const userList = DUMMY_PRODUCTS.find(p => p.id === productId);
    res.status(200).json({ success: true, userList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Display all products by a user
exports.getProductsByUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const products = DUMMY_PRODUCTS.filter(p => p.user === userId);
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Display all products by a collection
exports.getProductsByCollection = async (req, res, next) => {
  const { collectionId } = req.params;
  try {
    const products = DUMMY_PRODUCTS.filter(p => p.collection === collectionId);
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Create a new product
exports.createProduct = async (req, res, next) => {
  const { name, description, price, img, collection, user } = req.body;
  const newProduct = {
    name,
    description,
    price,
    img,
    collection,
    user
  };
  try {
    const product = await DUMMY_PRODUCTS.push(newProduct);
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
