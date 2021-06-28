require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) return res.status(400).send('no token')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch(err) {
    throw err;
    res.status(400).send('invalid token');
  };
};

module.exports = auth;