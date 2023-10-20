import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_DRESS = "/api/movies/all"

  constructor(private httpClient : HttpClient) {}
  
  getMovies(){
    return this.httpClient.get<any>(this.API_URL+this.ENDPOINT_DRESS);
  }
}
