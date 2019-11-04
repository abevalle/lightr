#!/usr/bin/env node
const express = require('express');
const app = express();
const port = 3001;
const lightr = require('./control.js')
const os = require('os')
var date = new Date();
var now = date.getTime();
const colors = require('colors')

app.get('/device', function(req, res) {
    var light = req.query;
    
    // Puts all my data in nice JSON
    res.json({light});

    // If ?light=false turn the light off
    if (light.state == 'false') {
        // Turn light off and print to console
        lightr.off()
        console.log(`Bulb turned off at ${date}`)
    }

    // If ?light=true turn on the light
    if (light.state == 'true') {
        // Turn light on and print to console
        lightr.on()
        console.log(`Bulb turned on at ${date}`)

    }
    
});


app.get('/toggle', function(req, res) {
    lightr.toggle()  
});

app.listen(port, () => console.log(`Server is running on`, `http://localhost:${port}`.underline.green))