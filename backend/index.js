const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const app = express();

// IMPORT ROUTES

const productRoutes = require("./routes/productRoutes");
const categoryRoute = require("./routes/categoryRoute");
const authRoutes = require("./routes/authRoute");

const port = process.env.PORT || 8000;

// CONNECT DATABASE
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

// MIDDLEWARE
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: "100mb",
    extended: true
  })
);
app.use(cookieParser());
app.use(cors());

// ROUTES MIDDLEWARE
app.use("/api", productRoutes);
app.use("/api", categoryRoute);
app.use("/api", authRoutes);

//ERROR MIDDLEWARE
app.use(errorHandler);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
