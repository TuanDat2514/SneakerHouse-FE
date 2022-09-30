import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment,URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
  getStockbyProduct(idProduct:string):Observable<any>{
    return this.http.get(URL.URL+environment.GETSTOCKALL+idProduct);
  }
}
