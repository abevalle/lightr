import { Component } from '@angular/core';
import { client } from 'tplink-smarthome-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lightr';

  public bulbPowerState: Array<boolean>;
  public client: string;
  public bulb: string;
  public getPlug: string;

  constructor() {
    this.bulbPowerState = [true, false]
    this.client = new client();
  }

  public on() {
    // Search for all lights and turn them on.
    client.on('bulb-new', function (bulb) {
      console.log('Bulb found:', bulb.alias);
      bulb.setPowerState(true).then(function () {
        console.log('Bulb', bulb.alias, 'is now on!');
      });
}
)}}