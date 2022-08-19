import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient 
  ) { 

  }

  // connecting to the api url to get today's temperature for the requested city in the metric system

  getWeatherData(city: string, date: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${env.BASE_URL}/${city}/today?unitGroup=metric'`, {
      headers: new HttpHeaders()
      .set(env.XRapidAPIHostHeaderName, env.XRapidAPIHostHeaderValue)
      .set(env.XRapidAPIKeyHeaderName, env.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('location', city)
      .set('unitGroup', 'metric')
    })
  }
}
