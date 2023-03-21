const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Name"],
    minlength: [3, "Name must have at least three(3) characters"],
    maxlength: 32,
    unique: true
  }
});

module.exports = mongoose.model("Category", categorySchema);
