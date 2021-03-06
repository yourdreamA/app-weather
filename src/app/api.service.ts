import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }


  getWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=tunis,tn&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric';
    return this.httpClient.get(url);
  }

  getWeatherByCity(city) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric';
    return this.httpClient.get(url);
  }
}
