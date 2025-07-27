const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/users")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));


app.use("/auth", authRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
