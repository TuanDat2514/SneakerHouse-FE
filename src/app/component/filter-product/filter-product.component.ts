import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeFilter() {
    let i = document.getElementById("btn-filter") as HTMLElement;
    i.style.width = "0px";
    let o = document.getElementById("overlay") as HTMLElement;
    o.style.display = "none";
  }
}
