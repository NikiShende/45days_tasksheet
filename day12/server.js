const express = require("express");
const authRoutes = require("./routes/routes.js");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
