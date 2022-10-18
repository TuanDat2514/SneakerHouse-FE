import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./pages/product/product.component";
import {DetailProductComponent} from "./pages/detail-product/detail-product.component";
import {HomeComponent} from "./pages/home/home.component";
import {ModalCartComponent} from "./component/modal-cart/modal-cart.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {LoginComponent} from "./pages/login/login.component";
import {FavoriteComponent} from "./pages/favorite/favorite.component";
import {RegisterComponent} from "./pages/register/register.component";
import {LoginAdminComponent} from "./admin/login-admin/login-admin.component";


const routes: Routes = [
  {path:"admin",component:LoginAdminComponent},
  {path:"register",component:RegisterComponent},
  {path:"favorite",component:FavoriteComponent},
  {path:"login",component:LoginComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"modal-cart",component:ModalCartComponent},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"detail-product/:id",component:DetailProductComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
