import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProductComponent } from './pages/product/product.component';
import { HotNewsComponent } from './component/hot-news/hot-news.component';
import {SwiperModule} from "swiper/angular";
import { FilterProductComponent } from './component/filter-product/filter-product.component';
import { ListProductComponent } from './component/list-product/list-product.component';
import { TaskbarComponent } from './component/taskbar/taskbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from "@angular/forms";
import { ModalCartComponent } from './component/modal-cart/modal-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    HotNewsComponent,
    FilterProductComponent,
    ListProductComponent,
    TaskbarComponent,
    FooterComponent,
    DetailProductComponent,
    HomeComponent,
    ModalCartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SwiperModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
