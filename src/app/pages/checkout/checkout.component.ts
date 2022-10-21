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
  abc(i:any){
    console.log(i);
  }
}
