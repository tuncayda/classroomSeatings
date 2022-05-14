const express = require('express');
require('dotenv').config();
const app = express();

const hostname = process.env.HOST;
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});