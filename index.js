const { Client } = require('tplink-smarthome-api');
const client  = new Client();
const express = require('express')
const inquirer = require('inquirer')

const bulb = client.getBulb({ host: '192.168.1.42' });

function on() {
    bulb.setPowerState(true);
}

function off() {
    bulb.setPowerState(false);
}

function getStat() {
    console.log(bulb.name)
}

getStat();

/* inquirer
  .prompt([
    {
      type: 'list',
      name: 'lights',
      message: 'How do you want the lights?',
      choices: [
        'On',
        'Off',
      ]
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));

    if (answers.lights == 'On') {
        on()
    } else {
        off()
    }

  });
 */