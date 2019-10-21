import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }

  refresh(city) {
    console.log( 'city=' + city);
    this.apiService.getWeatherByCity(city).subscribe((data : any) => {
      //this.weatherData = data;
      console.log( data);
    });

    //selectedCity = this.weatherData.city.name;
  }
  

}
