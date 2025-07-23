const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/post');
const Post = require('./models/post');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/college', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create user
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// Create post with reference to user
app.post('/posts', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// Get posts with user populated
app.get('/posts', async (req, res) => {
  const posts = await Post.find().populate('user');
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
