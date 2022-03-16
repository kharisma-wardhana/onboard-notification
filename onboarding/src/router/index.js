const express = require('express');
const app = express();

const AuthRoute = require('./auth');
const UserRoute = require('./user');

app.use('/v1/auth', AuthRoute);
app.use('/v1/users', UserRoute);

module.exports = app;