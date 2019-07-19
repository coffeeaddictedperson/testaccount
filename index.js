const path = require('path');
const express = require('express');
const app = express();
const fetch = require("node-fetch");

app.get('/health-check', function (req, res) {
    res.send('Port is safe and sound');
});

app.get('/get-weather', function (req, res) {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Kiev&APPID=c47a0f7b73394115eea341586e74e47b&units=metric';
    fetch(apiUrl)
        .then(resp => resp.json())
        .then(resp => {
            res.send({
                general: resp['weather'][0].main,
                description: resp['weather'][0].description,
                icon: resp['weather'][0].icon,
                temp: resp['main'].temp,
                sunset: resp['sys'].sunset,
                sunrise: resp['sys'].sunrise
            });
        }, error => {
            res.send(error);
        })
});

app.use(express.static('public'))

console.log('Express is listening on http://localhost:3000');
app.listen(3000);