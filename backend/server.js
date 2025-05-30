require('dotenv').config();
const app = require('./app');
// require('./database');
// require('./queue');

const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});