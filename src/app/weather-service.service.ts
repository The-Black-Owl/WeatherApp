import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherInfo } from './app.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  url=environment.weatherUrl;

  headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.XRapidAPIKey,
    'X-RapidAPI-Host': environment.XRapidAPIHost
  });


  constructor(private http:HttpClient) { }

  getWeather(cityname:string):Observable<WeatherInfo>{
    return this.http.get<WeatherInfo>(this.url,{headers:this.headers,params:new HttpParams().set('city', cityname)})
  }
}
