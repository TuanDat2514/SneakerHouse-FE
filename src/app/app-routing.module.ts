import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./pages/product/product.component";
import {DetailProductComponent} from "./pages/detail-product/detail-product.component";

const routes: Routes = [
  {path:"product",component:ProductComponent},
  {path:"detail-product",component:DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
