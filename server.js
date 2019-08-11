const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

const app = express();

if (process.env.NODE_ENV === 'develoment') {
    app.use(morgan('dev'));
}

app.use('/api/v1/profile', require('./routes/profile'));


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`);
});