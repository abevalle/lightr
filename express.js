const express = require('express');
const app = express();
const port = 3001;
const lightr = require('./control.js')

app.get('/device', function(req, res) {
    var light = req.query;
    
    // Puts all my data in nice JSON
    res.json({
        lightInfo: lightr.getStat(),
        GET: light
    });
    console.log(light.state)

    // If ?light=false turn the light off
    if (light.state == 'false') {
        lightr.off()
        console.log('off')
    }

    // If ?light=true turn on the light
    if (light.state == 'true') {
        lightr.on()
        console.log('on')
    }
    
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))