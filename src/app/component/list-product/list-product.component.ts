import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openFilter(){
    let i=document.getElementById("btn-filter") as HTMLElement;
    i.style.width="400px";
  }
  closeFilter(){
    let i=document.getElementById("btn-filter") as HTMLElement;
    i.style.width="0px";
  }
}
