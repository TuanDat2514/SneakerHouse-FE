import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../_service/product/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  gender=0;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    localStorage.setItem('gender',String(this.gender));
  }

}
