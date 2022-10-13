import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartService} from "../../_service/cart/cart.service";

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.css']
})
export class ModalCartComponent implements OnInit {
  @Output() close=new EventEmitter<boolean>();
  listItemCart:any;
  total=this.cartService.total$.value;
  cartID=Number(JSON.parse(String(localStorage.getItem('cartID'))));
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.total$.subscribe(res=>this.total=res);
    this.displayItemsCart();
  }

  displayItemsCart(){
    this.cartService.getDetailCart(this.cartID).subscribe(res=>{
      this.listItemCart=res.body;
      let sum=0;
      for (let i=0;i<this.listItemCart.length;i++){
        sum+=this.listItemCart[i].total_prod;
      }
      this.cartService.total$.next(sum);
    })
  }
  controlQty(item:any,qty:number){
    item.quantity=item.quantity+qty;
    item.total_prod=item.quantity*item.price_prod;
    this.cartService.updateDetail(item.id,item).subscribe(res=>{
      if(res.status==200) {
        this.displayItemsCart();
      }
    })
  }

  closeModal(){
    this.close.emit(false)
  }
  deleteDetail(item:any){
    this.cartService.deleteDetail(item.id).subscribe(res=>{
      if(res.status==202){
        this.displayItemsCart();
      }
    })
  }
}
