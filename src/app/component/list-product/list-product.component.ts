import {Component, OnInit} from '@angular/core';
import {Route, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  category='all';
  constructor(private routes:Router) {
  }

  ngOnInit(): void {
  }

  openFilter() {
    let i = document.getElementById("btn-filter") as HTMLElement;
    i.style.width = "400px";
    let o = document.getElementById("overlay") as HTMLElement;
    o.style.display = "block";
  }

  closeFilter() {
    let i = document.getElementById("btn-filter") as HTMLElement;
    i.style.width = "0px";
  }

  gotoDetail() {
    this.routes.navigate(['/detail-product']);
  }
  changeCategory(cate:string){
    this.category=cate;
  }
}
