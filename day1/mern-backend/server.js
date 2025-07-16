// server.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create model
const User = mongoose.model("User", userSchema);

// Insert a user
const newUser = new User({ name: "Nikita", email: "nikita@example.com" });
newUser.save()
  .then(() => console.log("User saved"))
  .catch(err => console.log(err));
