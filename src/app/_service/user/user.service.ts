import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment,URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addFavorite(prod:any){
    return this.http.post(URL.URL+environment.POST_FAVORITE,prod,{observe:"response"});
  }
}
