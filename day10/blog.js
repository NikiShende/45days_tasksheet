
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
  blogName: {
    type: String,
    required: true,
  },
  content: String,
  author: String,
});
const Blog = mongoose.model("blog", blogSchema);


router.post("/", async (req, res) => {
  const { blogName, content, author } = req.body;

  if (!blogName) {
    return res.status(400).json({ error: "Blog name is required" });
  }

  try {
    const newBlog = new Blog({ blogName, content, author });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




module.exports = router;
