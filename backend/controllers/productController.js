const Product = require("../models/product");
const User = require("../models/user");
const Category = require("../models/category");
const HttpError = require("../middleware/http-error");
const cloudinary = require("../util/cloudinary");
const { currentUser } = require("../middleware/auth");

const getUserIdFromToken = req => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.id;
};

//Create a product
exports.createProduct = async (req, res, next) => {
  const { name, description, price, image, category, creator } = req.body;

  const userId = getUserIdFromToken(req);

  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "figuras"
      // width: 300,
      // crop: "scale"
    });
    const product = await Product.create({
      name,
      description,
      price,
      image: {
        public_id: result.public_id,
        url: result.secure_url
      },
      category
      // creator
    });

    // Add product to user
    // await User.findById({ _id: creator })
    //   .select("+products")
    //   .then(user => {
    //     user.products.push(product);
    //     user.save({ validateBeforeSave: false });
    //   });
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
  //enable pagination
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Product.find({}).estimatedDocumentCount();

  //all categories ids
  let ids = [];
  const categ = await Category.find({}, { _id: 1 });
  categ.forEach(cat => {
    ids.push(cat._id);
  });

  //filter
  let cat = req.query.cat;
  let query = cat !== "" ? cat : ids;

  try {
    const products = await Product.find({ category: query })
      .populate("category", "name")
      .populate("creator", "name")
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    res.status(201).json({
      success: true,
      products,
      page,
      pages: Math.ceil(count / pageSize),
      count
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Get a single product by id
exports.getProductById = async (req, res, next) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById({ _id: productId }).populate(
      "category",
      "name"
    );
    res.status(201).json({
      success: true,
      product
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//Update a product
exports.updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { name, description, price, category } = req.body;
  const updatedProduct = {
    name,
    description,
    price,
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
    res.status(201).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Products by User
exports.getProductsByUser = async (req, res, next) => {
  const { userId } = req.params;

  let userWithProducts;
  try {
    const userWithProducts = await User.findById(userId).populate(
      "products",
      "name description price image category"
    );
    console.log(userWithProducts);
    if (!userWithProducts || userWithProducts.products.length === 0) {
      return next(
        new HttpError("Could not find products for the provided user id", 404)
      );
    }
    res.json({
      products: userWithProducts.products.map(product => product.toObject())
    });
  } catch (error) {
    return next(
      new HttpError("Fetcing Product went wrong, please try again", 500)
    );
  }
};

// display category
exports.productCategory = async (req, res, next) => {
  try {
    const cat = await Product.find().populate("category", "name");
    res.status(201).json({
      success: true,
      cat
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
