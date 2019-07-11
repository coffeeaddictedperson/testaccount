const path = require('path');
const express = require('express');
const app = express();

app.get('/health-check', function (req, res) {
    res.send('Port is safe and sound');
});
app.use(express.static('public'))

console.log('Express is listening on http://localhost:3000');
app.listen(3000);