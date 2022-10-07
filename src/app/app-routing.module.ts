import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./pages/product/product.component";
import {DetailProductComponent} from "./pages/detail-product/detail-product.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductComponent},
  {path:"detail-product",component:DetailProductComponent},
  {path:'',redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
