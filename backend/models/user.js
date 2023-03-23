const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "Please add a Name"], maxlength: 32 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid E-mail"
    ]
  },
  password: {
    type: String,
    required: true,
    required: [true, "Please add a Password"],
    minlength: [6, "password must have at least six(6) characters"],
    match: [
      /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters"
    ]
  },
  products: [
    {
      type: ObjectId,
      ref: "Product",
      required: [true, "Product must have a creator"]
    }
  ],
  role: { type: Number, default: 0 }
});

// encrypting password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// verify password
userSchema.methods.comparePassword = async function (yourPassword) {
  return await bcrypt.compare(yourPassword, this.password);
};

// get the token
userSchema.methods.jwtGenerateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: 3600
  });
};

module.exports = mongoose.model("User", userSchema);
