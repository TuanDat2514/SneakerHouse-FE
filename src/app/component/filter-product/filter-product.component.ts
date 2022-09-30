import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../_service/brand/brand.service";
import {ProductService} from "../../_service/product/product.service";

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {

  constructor(private brandSevice:BrandService,private productService:ProductService) { }

  ngOnInit(): void {
  }
  closeFilter() {
    let i = document.getElementById("btn-filter") as HTMLElement;
    i.style.width = "0px";
    let o = document.getElementById("overlay") as HTMLElement;
    o.style.display = "none";
  }
}
