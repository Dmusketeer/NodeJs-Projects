const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', { title: 'HOME' })
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})