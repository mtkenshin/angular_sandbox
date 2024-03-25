import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'view-weather', // This is the CSS selector to use this component
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  title = 'Weather';
  weatherdata: any;

  constructor(private _WeatherService: WeatherService) {}
  
  ngOnInit(): void {
    this._WeatherService.getWeatherData().subscribe(
      (data) => {
        this.weatherdata = data;
        console.log('Weather Data:', this.weatherdata);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}