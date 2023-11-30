import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';
import { WeatherInfo } from './app.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city:string='Tongaat'
  weatherData?:WeatherInfo;

  constructor(private weather:WeatherServiceService){
    this.weather.getWeather(this.city)
    .subscribe((resposne)=>{
      this.weatherData=resposne;
      console.log(resposne);
    },
    (error)=>{console.log(error)})
  }


}
