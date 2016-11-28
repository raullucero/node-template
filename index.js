const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.send('From the api')
});

app.get('/', (req, res) => {
    res.send('index.html');
});



app.listen(3000, () => {
    console.log('Server listen on port 3000');
});