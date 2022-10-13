import { Component, OnInit } from '@angular/core';
import {CartService} from "../../_service/cart/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  listItem:any;
  cartID=Number(JSON.parse(String(localStorage.getItem('cartID'))));
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getDetailCart(this.cartID).subscribe(res=>this.listItem=res.body)
  }

}
