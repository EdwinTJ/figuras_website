const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: ObjectId, ref: "Role", required: true }
});

module.exports = mongoose.model("User", userSchema);
