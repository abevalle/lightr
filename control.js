const { Client } = require('tplink-smarthome-api');

const client = new Client();
const bulb = client.getDevice({ host: '192.168.1.42'})

module.exports = {
off: function () {
    bulb.then((device) => {
        device.setPowerState(false);
    });
},

on: function () {
    bulb.then((device) => {
        device.setPowerState(true);
    });
},

getStat:function () {
    return bulb.then((device) => {
         let status = device.getPowerState().then(console.log)
         return status
    });
    
}
}

function getStat() {
    return bulb.then((device) => {
       device.getPowerState().then(function(status) {
           return
       })
    });
}
