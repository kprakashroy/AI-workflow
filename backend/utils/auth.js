// Middleware or helper to ensure valid token is passed
function ensureAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Unauthorized');
  req.userToken = token;
  next();
}

module.exports = { ensureAuth };