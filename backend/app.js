const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use('/api', apiRoutes);

module.exports = app;