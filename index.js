const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');


const routes = require('./api/routes/index');

const app = express();

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