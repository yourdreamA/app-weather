import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData;
  selectedCity = 'tunis';
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getWeather().subscribe((data : any) => {
      this.weatherData = data;
      console.log( data);
    });

  }

  refresh(city) {
    console.log( 'city=' + city);
    this.apiService.getWeatherByCity(city).subscribe((data : any) => {
      this.weatherData = data;
      console.log( data);
    });

    //selectedCity = this.weatherData.city.name;
  }
}