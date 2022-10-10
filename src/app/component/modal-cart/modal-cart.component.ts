import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.css']
})
export class ModalCartComponent implements OnInit {
  @Output() close=new EventEmitter<boolean>();
  listItemCart=JSON.parse(String(localStorage.getItem('cart'))).detailCart;
  constructor() { }

  ngOnInit(): void {
    console.log(this.listItemCart);
  }
  closeModal(){
    this.close.emit(false)
  }
}
