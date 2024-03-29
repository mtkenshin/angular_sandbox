import { Component, OnInit } from '@angular/core';
import { WeatherModule } from './weather/weather.module';

@Component({
  selector: 'view-home',
  imports: [WeatherModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  title = 'Home';

  ngOnInit(): void {
      
  }
}
