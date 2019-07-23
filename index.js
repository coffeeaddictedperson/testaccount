const path = require('path');
const express = require('express');
const app = express();
const fetch = require("node-fetch");

const weatherCache = {
        timestamp: 0,
        response: {}
    },
    // 3 minutes
    ttl = 180e3;

app.get('/health-check', function (req, res) {
    res.send('Port is safe and sound');
});

app.get('/get-weather', function (req, res) {
    const currentTime = Date.now();
    if(currentTime - weatherCache.timestamp < ttl ) {
        res.send(weatherCache.response);
        return;
    }

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c47a0f7b73394115eea341586e74e47b&units=metric';
    fetch(apiUrl)
        .then(resp => resp.json())
        .then(resp => {
            weatherCache.timestamp = Date.now();
            if(!resp['weather'] || !resp['main'] || !resp['sys']) {
                weatherCache.response = {};
            } else {
                weatherCache.response = {
                    general: resp['weather'][0].main,
                    description: resp['weather'][0].description,
                    icon: resp['weather'][0].icon,
                    temp: resp['main'].temp,
                    sunset: resp['sys'].sunset,
                    sunrise: resp['sys'].sunrise
                };
            }
            res.send(weatherCache.response);
        }, error => {
            res.send(error);
        })
});

app.use(express.static('public'));
app.listen(3000);
console.log('Express is listening on http://localhost:3000');