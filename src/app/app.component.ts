//import { Component } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
export class App implements OnInit {
  
  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    this.zoom = 3;
    this.maxSpeed = 40;
    this.latitude = 21.291;
    this.longitude = -122.214;

    this.polyline = [
        {
            latitude:  39.8282,
            longitude: -98.5795,
            speed: 50
        },
        {
            latitude: 37.772,
            longitude: -122.214,
            speed: 20
        },
        {
            latitude: 21.291,
            longitude: -157.821,
             speed: 50
        },
        {
            latitude: -18.142,
            longitude: 178.431,
            speed: 20
        },
        {
            latitude: -27.467,
            longitude: 153.027,
            speed: 55
        }
    ]
 
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

    });
  }
  
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}