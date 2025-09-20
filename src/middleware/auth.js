// src/middleware/auth.js
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const h = req.headers.authorization;
  if (!h) return res.sendStatus(401);
  const t = h.split(" ")[1];
  try { req.user = jwt.verify(t, process.env.JWT_SECRET); next(); }
  catch { res.sendStatus(403); }
};