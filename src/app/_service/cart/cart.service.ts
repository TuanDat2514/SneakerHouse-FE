import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Cart} from "../../../assets/interface/interface";
import {HttpClient} from "@angular/common/http";
import {environment,URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=new BehaviorSubject<Cart>({
    id_user:1,
    subtotal:0,
    discount:0,
    total:0
  });
  constructor(private http:HttpClient) { }
  postCart(cart:Cart){
    return this.http.post(URL.URL+environment.POST_CART,cart);
  }
  getCart(id_cart:number):Observable<any>{
    return this.http.get(URL.URL+environment.GET_CART+id_cart);
  }
  addDetail(id_cart:number,detail:any){
    return this.http.post(URL.URL+environment.POST_DETAIL_CART+id_cart,detail);
  }
}
