import { Component, OnInit } from '@angular/core';
import { DetailService } from './services/detailsService/detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'NETFLUX';
  movies: any[] = [];

  constructor(private detailService: DetailService) {
    
  }

  ngOnInit(): void {
    console.log("on init")
    this.detailService.getMovies().subscribe((data: any) =>{
      this.movies = data;
    })
  }
}
