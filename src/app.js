const express = require('express');
const pokeneasRoutes = require('./routes/pokeneas.routes');
const app = express();

app.use(express.json());
app.use('/', pokeneasRoutes);

module.exports = app;