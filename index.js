const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server listen on port 3000');
});