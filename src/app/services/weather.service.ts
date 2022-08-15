import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http : HttpClient) {
   }

  GetWeather(city : string){
    this.http.get(environment.WeatherApiBaseUrl,
      {
        headers: new HttpHeaders()

        .set(environment.XRapidAPIHostHeaderName, 
          environment.XRapidAPIHostHeaderValue)

        .set(environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue)

      })
  }
}
