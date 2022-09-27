import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProductComponent } from './pages/product/product.component';
import { HotNewsComponent } from './component/hot-news/hot-news.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    HotNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
