import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import { User } from 'src/assets/interface/interface';
import {CartService} from "../../_service/cart/cart.service";
import {UserService} from "../../_service/user/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterContentInit,OnDestroy {
  cart=this.cartService.cart.value;
  user!:any;
  constructor(
    private cartService:CartService,
    private userService:UserService
  ) { }

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
    this.userService.getUser(1).subscribe(res=>{
      this.user=res;
      // @ts-ignore
      localStorage.setItem('user',JSON.stringify(this.user));
    });
  }

}
