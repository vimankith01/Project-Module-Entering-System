const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).send("A token is required for authentication");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
}

module.exports = validateToken;
