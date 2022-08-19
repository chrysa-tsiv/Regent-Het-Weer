import { Component, OnInit } from '@angular/core';
import { Days, WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  cityName: string = 'Amsterdam';
  detailedResponse?: Array<Days> = [];
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  // submit function for the search bar
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  // api response to be used for displaying data 
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName, "today")
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        this.detailedResponse = response.days;
        console.log("detailedResponse", this.detailedResponse[0]);
      } 
    });

    

  }  

}
