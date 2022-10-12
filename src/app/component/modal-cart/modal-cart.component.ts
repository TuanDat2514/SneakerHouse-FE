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
  cartID=Number(JSON.parse(String(localStorage.getItem('cartID'))));
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.displayItemsCart();
  }

  displayItemsCart(){
    this.cartService.getCart(this.cartID).subscribe(res=>{
      this.listItemCart=res?.detailCart;}
    )
  }
  closeModal(){
    this.close.emit(false)
  }
  deleteDetail(item:any){
    this.cartService.deleteDetail(item.id).subscribe(res=>{
      if(res.status==202){
        console.log("da xoa",item.id);
      }
    })
    console.log(item.id)
  }
}
