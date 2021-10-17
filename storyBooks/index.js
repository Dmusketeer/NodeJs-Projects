const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();

const Db_password = process.env.MONGO_PASSWORD
const MONGO_URI = `mongodb+srv://dheeraj:${Db_password}@atlastesting.1itdz.mongodb.net/storyBook?retryWrites=true&w=majority`;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log('DataBase Connected ........')
})

mongoose.connection.on('error', (err) => {
    console.log('Connection Error ........')
})

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', { title: 'HOME' })
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})