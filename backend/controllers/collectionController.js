const Collection = require("../models/collection");
const HttpError = require("../middleware/http-error");
const { validationResult } = require("express-validator");

//Get all collections
exports.getCollection = async (req, res, next) => {
  try {
    const collection = await Collection.find({});
    res.status(200).json({ success: true, collection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Create a collection
exports.createCollection = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name } = req.body;
  const exists = await Collection.findOne({ name });
  if (exists) {
    return next(new HttpError("Collection already exists", 400));
  }
  const newCollection = {
    name
  };
  try {
    const collection = await Collection.create(newCollection);
    res.status(201).json({ success: true, collection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a collection
exports.updateCollection = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { collectionId } = req.params;
  const { name } = req.body;
  const updatedCollection = {
    name
  };
  try {
    const collection = await Collection.findByIdAndUpdate(
      { _id: collectionId },
      updatedCollection,
      {}
    );
    collection.name = updatedCollection.name;
    res.status(200).json({ success: true, collection });
  } catch (error) {
    return next(
      new HttpError("Updating product went wrong, please try again", 500)
    );
  }
};

//Delete a collection
exports.deleteCollection = async (req, res, next) => {
  const { collectionId } = req.params;
  try {
    await Collection.findByIdAndDelete({ _id: collectionId });
    res.status(200).json({ success: true, message: "Collection deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
