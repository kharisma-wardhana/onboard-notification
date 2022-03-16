const express = require('express');
const cors = require('cors');
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

require('dotenv').config();

const apiRoutes = require('./router');
app.use('/api', apiRoutes);

// throw 404 if no route is matched
app.all('*', (_, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});