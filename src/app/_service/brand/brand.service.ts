import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../../../assets/interface/interface";
import {environment,URL} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getBrandbyId(id_brand:string){
    return this.http.get(URL.URL+environment.GETBRANDBYID+id_brand);
  }
  getSizeBrand(id_brand:string,gender:number){
    return this.http.get(URL.URL+environment.GET_SIZE_BRAND_BY_GENDER+id_brand+"?gender="+gender);
  }
  getBrandAll(){
    return this.http.get(URL.URL+environment.GET_BRAND_ALL);
  }

}
