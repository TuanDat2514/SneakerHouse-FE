import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment,URL} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(id_user:any):Observable<any>{
    return this.http.get(URL.URL+environment.GET_USER+id_user);
  }
  
  addFavorite(prod:any,id_user:any){
    return this.http.post(URL.URL+environment.POST_FAVORITE+id_user,prod,{observe:"response"});
  }
}
