import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule
  ],
  exports: [WeatherComponent],
  providers: [WeatherService] // Add the service to the providers list
})
export class WeatherModule { }
