import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment,URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }

  addShipping(shipping:any){
    return this.http.post(URL.URL+environment.POST_SHIPPING,shipping,{observe:"response"});
  }
}
