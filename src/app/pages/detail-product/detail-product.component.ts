import { Component, OnInit } from '@angular/core';
import {Product} from "../../../assets/interface/interface";
import {ProductService} from "../../_service/product/product.service";
import {BrandService} from "../../_service/brand/brand.service";
import {StockService} from "../../_service/stock/stock.service";
import {CartService} from "../../_service/cart/cart.service";
import {ActivatedRoute, Route} from "@angular/router";
import {UserService} from "../../_service/user/user.service";
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
  idProd!:string;
  productStock!:any;
  selectedSize!:number;
  gender=localStorage.getItem('gender');
  cart=JSON.parse(String(localStorage.getItem('cart')));
  isFavorite:boolean=true;
  message!:string;
  constructor(
    private productSevice:ProductService,
    private brandService:BrandService,
    private stockService:StockService,
    private cartService:CartService,
    private route:ActivatedRoute,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.idProd=String(this.route.snapshot.paramMap.get('id'));
    this.productSevice.getProdbyId(this.idProd).subscribe(res=>{
      this.selectedProduct=res
      this.brandService.getBrandbyId(this.selectedProduct.id_brand).subscribe(res=>{
        this.brand=res;
        console.log(this.brand);
      })
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
    });
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

  }
  selectSize(size:any){
    this.selectedSize=size;
  }
  addtoFavorite(){
    let favorite={id_user:JSON.parse(String(localStorage.getItem('user'))).id_user,id_product: this.idProd}
    this.userService.addFavorite(favorite).subscribe(res=>{
      // @ts-ignore
      console.log(res.status);
    })
    this.isFavorite=!this.isFavorite;
  }
  addtoCart() {
    let addProcudut = {
      id_product: this.selectedProduct.id_product,
      img:this.selectedProduct.img,
      size: this.selectedSize,
      quantity: 1,
      price_prod: this.selectedProduct.price,
      total_prod: this.selectedProduct.price,
    }
    console.log(addProcudut)
    if (addProcudut.size ==undefined) {
      this.message = 'Bạn chưa chọn size';
    } else {
      this.message='';
      // @ts-ignore
      this.cartService.addDetail(this.cart.id_cart, addProcudut).subscribe(res => {
        if(res.status==200){
          this.cartService.getCart(this.cart.id_cart).subscribe(res => {
            localStorage.setItem('cart', JSON.stringify(res));
          })
          this.cartService.lenghtCart$.next(this.cartService.lenghtCart$.value + 1);
        } else {
          this.message='Thêm không thành công';
        }
      })
    }
  }

}
