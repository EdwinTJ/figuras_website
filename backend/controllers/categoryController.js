const Category = require("../models/category");
const HttpError = require("../middleware/http-error");
const { validationResult } = require("express-validator");

//Get all collections
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Category by id
exports.getCategoryById = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    if (!category) {
      return next(new HttpError("Collection not found", 404));
    }
    res.status(200).json({ success: true, category });
  } catch (error) {}
};
//Create a collection
exports.createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const exists = await Category.findOne({ name });
  if (exists) {
    return next(new HttpError("Collection already exists", 400));
  }
  const newcategory = {
    name
  };
  try {
    const category = await Category.create(newcategory);
    res.status(201).json({ success: true, category });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a category
exports.updateCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { categoryId } = req.params;
  const { name } = req.body;
  const updatedCategory = {
    name
  };
  try {
    const category = await Category.findByIdAndUpdate(
      { _id: categoryId },
      updatedCategory,
      {}
    );
    category.name = updatedCategory.name;
    res.status(200).json({ success: true, category });
  } catch (error) {
    return next(
      new HttpError("Updating product went wrong, please try again", 500)
    );
  }
};

//Delete a collection
exports.deleteCategory = async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    await Category.findByIdAndDelete({ _id: categoryId });
    res.status(200).json({ success: true, message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
