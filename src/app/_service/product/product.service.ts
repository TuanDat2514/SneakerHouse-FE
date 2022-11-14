import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL,environment} from "../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../../assets/interface/interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product$=new BehaviorSubject<Product|null>(null);
  constructor(private http:HttpClient) { }

  getListProduct():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(URL.URL+environment.PRODUCT_ALL);
  }
  getProdbyId(id_prod:any):Observable<any>{
    return this.http.get(URL.URL+environment.GET_PRODUCT_BY_ID+id_prod);
  }
  getProdbyGender(gender:any):Observable<any>{
    return this.http.get(URL.URL+environment.GET_PRODUCT_BY_GENDER + "gender=" + gender);
  }
}
