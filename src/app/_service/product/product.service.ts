import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL,environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../../../assets/interface/interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getListProduct():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(URL.URL+environment.PRODUCT_ALL);
  }
}
