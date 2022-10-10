import {Component, OnInit} from '@angular/core';
import {Route, Router, Routes} from "@angular/router";
import {ProductService} from "../../_service/product/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct!:any[];
  constructor(private routes:Router,private productService:ProductService) {}
  category='all';


  ngOnInit(): void {
    this.productService.getListProduct().subscribe(res=>{
      this.listProduct=res;
      console.log(this.listProduct);
    })
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

  gotoDetail(item:any) {
    this.productService.product$.next(item);
    this.routes.navigate(['/detail-product',item.id_product]);
  }
  changeCategory(cate:string){
    this.category=cate;
  }
}
