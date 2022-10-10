import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_service/cart/cart.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  lenghtCart!:any;
  openDialogCart:boolean=false;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.lenghtCart$.subscribe(res=>this.lenghtCart=res);
  }
  openCart(){
    this.openDialogCart=!this.openDialogCart;
  }
  closeCart(event:any){
    this.openDialogCart=event;
  }
}
