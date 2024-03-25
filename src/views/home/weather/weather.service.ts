import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This service is available throughout the application
})
export class WeatherService {

    constructor(private http: HttpClient) { }

    getWeatherData(): Observable<any> {
      return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1'); // Adjust the path as per your file structure
    }
}