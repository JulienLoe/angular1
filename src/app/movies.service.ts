import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public cartList: any =[];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getMovies(){
    return this.productList.asObservable();
  }

  addCart(shoes : any){
    this.cartList.push(shoes);
    this.productList.next(this.cartList);
    this.getTotal();
  }

  getTotal(){
    let sumTotal = 0;
    this.cartList.map((el: any) =>{
      sumTotal += el.total
    } )
  }

  removeCart(product: any){
    this.cartList.map((el: any, index: any) =>{
      if(el.id == product.id){
        this.cartList.splice(index,1)
      }
    })
  }
}