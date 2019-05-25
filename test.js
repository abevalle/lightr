const { Client } = require('tplink-smarthome-api');
const client = new Client();

const plug = client.getPlug({ host: '192.168.1.42' });
plug.setPowerState(true);
plug.setPowerState(false);