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
    this.displayItemsCart();
  }
  displayItemsCart(){
    this.cartService.getDetailCart(this.cartID).subscribe(res=>{
      this.listItem=res.body;
     /* let sum=0;
      for (let i=0;i<this.listItemCart.length;i++){
        sum+=this.listItemCart[i].total_prod;
      }
      this.cartService.total$.next(sum);*/
    })
  }
  deleteDetail(item:any){
    this.cartService.deleteDetail(item.id).subscribe(res=>{
      if(res.status==202){
        this.displayItemsCart();
      }
    })
  }
}
