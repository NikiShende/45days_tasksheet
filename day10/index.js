const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./blog");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blogdata")
  .then(() => console.log("MongoDB connected to blogdata"))
  .catch(err => console.error("MongoDB connection error:", err));


app.use("/blog", blogRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
