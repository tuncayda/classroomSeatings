require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const hostname = process.env.HOST;
const port = process.env.PORT;

app.use(cors());

// Serve assets
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});