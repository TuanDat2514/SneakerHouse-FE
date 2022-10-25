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
  total:any;
  checkout:any;
  discount:any;
  cart=JSON.parse(String(localStorage.getItem('cart')));
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.displayItemsCart();
  }
  displayItemsCart(){
    this.cartService.getDetailCart(this.cartID).subscribe(res=>{
      this.listItem=res.body;
      let sum=0;
      for (let i=0;i<this.listItem.length;i++){
        sum+=this.listItem[i].total_prod;
      }
      this.total=sum;
      this.checkout=this.total;
    })
  }
  deleteDetail(item:any){
    this.cartService.deleteDetail(item.id).subscribe(res=>{
      if(res.status==202){
        this.displayItemsCart();
      }
    })
  }
  submitDiscount(i:any){
    this.cartService.getDiscount(i).subscribe(res=>{
      if(!this.discount) {
        this.discount = res;
        this.checkout = this.checkout - (this.checkout * this.discount.discount / 100);
      }else {
        let i=res;
        if(i.id !== this.discount?.id){
          this.discount = i;
          this.checkout = this.checkout - (this.checkout * this.discount.discount / 100);
        }
      }
    })
  }
  submitCheckout(){
    if(this.discount) {
      this.cart.discount = this.discount.discount;
      this.cart.subtotal = this.total;
      this.cart.total = this.checkout;
    }else {
      this.cart.subtotal = this.total;
      this.cart.total = this.checkout;
    }
    console.log(this.cart);
    localStorage.setItem('cart',JSON.stringify(this.cart));
  }
}
