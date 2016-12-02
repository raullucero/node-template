const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
// var AES = require("crypto-js/aes");
const CryptoJS = require('crypto-js');


// var rawStr = "hello world asdasd!";
// var wordArray = CryptoJS.AES.encrypt(rawStr);
// var base64 = CryptoJS.enc.Base64.stringify(wordArray);
// console.log('encrypted:', wordArray.toString());

const routes = require('./api/routes/index');

const app = express();

// User native promise as mongoose promises library
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo is connected');
});
// Configuration
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server listen on port 3000');
});