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

toggle: function () {
    bulb.then((device) => {
        device.togglePowerState(true);
        console.log('Notice: The light has been toggled')
    });
},

getStat:function () {
    bulb.then((device) => {
         let status = device.getPowerState().then()
    });
    
}
}

function getStat() {
    return bulb.then((device) => {
       device.getPowerState().then(function(status) {
       })
    });
}
