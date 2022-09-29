import { Component, OnInit } from '@angular/core';
import {Product} from "../../../assets/interface/interface";
import {ProductService} from "../../_service/product/product.service";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  selectedProduct!:any;
  constructor(private productSevice:ProductService) { }

  ngOnInit(): void {
    this.productSevice.product$.subscribe(res=>this.selectedProduct=res);
    console.log(this.selectedProduct);
  }

}
