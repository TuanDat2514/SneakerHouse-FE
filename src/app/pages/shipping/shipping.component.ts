import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {CartService} from "../../_service/cart/cart.service";
import {ShippingService} from "../../_service/shipping/shipping.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  formDelivery=this.fb.group({
    consignee:['',[Validators.required]],
    consignee_phone:['',[Validators.required]],
    delivery_address:['',[Validators.required]],
    delivery_method:['',[Validators.required]],
    payment_method:['',[Validators.required]],
  });
  constructor(
    private fb:FormBuilder,
    private cartService:CartService,
    private shippingService:ShippingService,
    private router:Router
  ) { }
  listItem:any;
  cartID=Number(JSON.parse(String(localStorage.getItem('cartID'))));
  cart=JSON.parse(String(localStorage.getItem('cart')));
  payment_method:any;
  ngOnInit(): void {
    this.displayItemsCart();
  }
  displayItemsCart(){
    this.cartService.getDetailCart(this.cartID).subscribe(res=>{
      this.listItem=res.body;
    })
  }
  abc(){
    let i={
      cart_id: this.cartID,
      consignee:"",
      consignee_phone:'',
      delivery_address:'',
      delivery_method:'',
      payment_method:this.payment_method}
    // @ts-ignore
    i.consignee=this.formDelivery.value.consignee;
    // @ts-ignore
    i.consignee_phone=this.formDelivery.value.consignee_phone;
    // @ts-ignore
    i.delivery_address=this.formDelivery.value.delivery_address;
    i.delivery_method=this.formDelivery.value.delivery_method ? "1":"0";
    this.cart
    this.shippingService.addShipping(i).subscribe(res=>{
      if(res.status === 200){
        alert("Đặt hàng thành công");
        this.router.navigate(['/home'])
      }
    });
  }
}
