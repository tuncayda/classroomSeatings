require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const pug = require('pug');

const app = express();
const hostname = process.env.HOST;
const port = process.env.PORT;

app.use(cors());

// Serve assets
app.use(express.static(__dirname + '/public'));

// Set pug templating engine
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});