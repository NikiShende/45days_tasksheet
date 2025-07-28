const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

let refreshTokens = [];

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  const refreshToken = jwt.sign(user, process.env.REFRESH_SECRET, { expiresIn: '7d' });
  refreshTokens.push(refreshToken);
  return refreshToken;
}


router.post("/login", (req, res) => {
  const user = { id: "123", username: "nikita" }; // from DB normally
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  res.json({ accessToken, refreshToken });
});


router.post("/refresh", (req, res) => {
  const { token } = req.body;
  if (!token || !refreshTokens.includes(token)) return res.sendStatus(403);

  jwt.verify(token, process.env.REFRESH_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ id: user.id, username: user.username });
    res.json({ accessToken });
  });
});


router.post("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter(t => t !== req.body.token);
  res.sendStatus(204);
});

module.exports = router;
