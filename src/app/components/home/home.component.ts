import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detailsService/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  title = 'home';
  movies: any[] = [];

  constructor(private detailService: DetailService) {
    
  }

  ngOnInit(): void {
    console.log("on init")
    this.detailService.getMovies().subscribe((data: any) =>{
      this.movies = data;
    })
  }

  // addCart(shoes: any){
  //   this.cartService.addCart(shoes)
  //   console.log(shoes)
  // }
}
