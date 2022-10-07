import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import { User } from 'src/assets/interface/interface';
import {CartService} from "../../_service/cart/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterContentInit,OnDestroy {
  cart=this.cartService.cart.value;
  user:User={
    id_user:1,
    fullname:"Trịnh Tuấn Đạt",
    address:"Bắc Giang",
    birthday:"25-1-2000",
    phone:"0388138789",
    gender:1,
    email:"dattuantrinh77@gmail.com",
    username:"tuandat",
    password:"tuandat",
    role:"USER"
  }
  constructor(private cartService:CartService) { }

  ngOnDestroy(): void {
        this.ngAfterContentInit();
    }

  ngAfterContentInit(): void {
    this.cartService.postCart(this.cart).subscribe(res=>{
      // @ts-ignore
      this.cartService.getCart(res.id_cart).subscribe(res=>{
        localStorage.setItem('cart',JSON.stringify(res));
      });
    });
    }

  ngOnInit(): void {
    // @ts-ignore
    localStorage.setItem('user',JSON.stringify(this.user));
  }

}
