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
  listSize:any[]=[];
  gender=localStorage.getItem('gender');
  cart=JSON.parse(String(localStorage.getItem('cart')));
  isFavorite:boolean=true;
  message!:string;
  user=JSON.parse(String(localStorage.getItem('user')));
  countItem=JSON.parse(String(localStorage.getItem('countItem')));
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
    this.checkFavorite();
    this.productSevice.getProdbyId(this.idProd).subscribe(res=>{
      this.selectedProduct=res
      console.log(this.selectedProduct);
      this.brandService.getBrandbyId(this.selectedProduct.id_brand).subscribe(res=>{
        this.brand=res;
        console.log(this.brand);
      })
      this.brandService.getSizeBrand(this.selectedProduct.id_brand,Number(this.gender)).subscribe(res=>{
        this.productStock=res;
        console.log(this.productStock);
        for(let i=0;i<this.productStock.length;i++) {
          for (let j = 0; j < this.selectedProduct.stock.length; j++) {
            let s = {id_product: this.selectedProduct.id_product, size: 0, amount: 0};
            if (this.productStock[i].id_size == this.selectedProduct.stock[j].id_size) {
              s.size = this.productStock[i].size;
              s.amount = this.selectedProduct.stock[j].amount;
              console.log(s);
              this.listSize.push(s);
            }
          }
        }
        console.log(this.listSize)
      })
    });


  }
  checkFavorite(){
    // @ts-ignore
    let i = this.user.favorite.find(obj=>obj.id_product===this.idProd);
    console.log(i);
    if(i){
      this.isFavorite=!this.isFavorite;
    }
  }
  selectSize(size:any){
      this.selectedSize=size
  }
  addtoFavorite(){
    let favorite={id_user:JSON.parse(String(localStorage.getItem('user'))).id_user,id_product: this.idProd}
    this.userService.addFavorite(favorite,favorite.id_user).subscribe(res=>{
      // @ts-ignore
      if(res.status==200){
        this.isFavorite=!this.isFavorite;
        this.userService.getUser(favorite.id_user).subscribe(res=>{
          localStorage.setItem('user',res);
        })
      }
    })
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
          localStorage.setItem('countItem',String(Number(this.countItem)+1));
        } else {
          this.message='Thêm không thành công';
        }
      })
    }
  }

}
