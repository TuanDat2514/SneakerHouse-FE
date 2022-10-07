import { Component, OnInit } from '@angular/core';
import {Product} from "../../../assets/interface/interface";
import {ProductService} from "../../_service/product/product.service";
import {BrandService} from "../../_service/brand/brand.service";
import {StockService} from "../../_service/stock/stock.service";
import {CartService} from "../../_service/cart/cart.service";
export interface Stock{
  product:string,
  size:number,
  gender:number,
  amount:number
}
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  selectedProduct!:any;
  brand!:any;
  productStock!:any;
  selectedSize!:number;
  gender=localStorage.getItem('gender');
  cart=JSON.parse(String(localStorage.getItem('cart')));
  constructor(
    private productSevice:ProductService,
    private brandService:BrandService,
    private stockService:StockService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.productSevice.product$.subscribe(res=>this.selectedProduct=res);
    console.log(this.selectedProduct);
    this.brandService.getBrandbyId(this.selectedProduct.id_brand).subscribe(res=>{
      this.brand=res;
      console.log(this.brand);
    })
    // this.stockService.getStockbyProduct(this.selectedProduct.id_product, this.gender).subscribe(res=>{
    //   //this.productStock=res;
    //   for(let i=0;i<res.length;i++){
    //     let a={ product:'',size:0, gender:0, amount:0,isEmpty:false}
    //       a.product=res[i][0];
    //       a.size=res[i][1];
    //       a.gender=res[i][2];
    //       a.amount=res[i][3];
    //       if(res[i][3]==0){
    //         a.isEmpty=true;
    //     }
    //     this.productStock.push(a);
    //   }
    // })
    this.brandService.getSizeBrand(this.selectedProduct.id_brand,Number(this.gender)).subscribe(res=>{
      this.productStock=res;
      //   for(let i=0;i<this.productStock.length ;i++){
      //     let a={id_brand:'',size:0, gender:0,isEmpty:false}
      //       a.id_brand=this.productStock[i];
      //       a.size=this.productStock[i];
      //       a.gender=this.productStock[i];
      //       if(res[i][3]==0){
      //         a.isEmpty=true;
      //     }
      //     this.productStock.push(a);
      //   }
      // console.log(res)
    })

  }
  selectSize(size:any){
    this.selectedSize=size;
  }
  addtoCart(){
    let addProcudut={
      id_product:this.selectedProduct.id_product,
      size:this.selectedSize,
      quantity:1,
      price_prod:this.selectedProduct.price,
      total_prod:this.selectedProduct.price,
    }
    // @ts-ignore
    this.cartService.addDetail(this.cart.id_cart,addProcudut).subscribe(res=>{
      this.cartService.getCart(this.cart.id_cart).subscribe(res=>{
        localStorage.setItem('cart',JSON.stringify(res));
      })
    })
  }

}
