const mongoose = require("mongoose");
const user = require("./user");
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  collection: { type: ObjectId, ref: "Collection", required: true },
  user: { type: ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model("Product", productSchema);
