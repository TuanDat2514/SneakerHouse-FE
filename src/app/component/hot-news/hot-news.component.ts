import { Component, OnInit } from '@angular/core';
import {SlideHorizontalAnimation} from "../../../assets/animation/SlideHorizontalAnimation";

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css'],
  animations:[SlideHorizontalAnimation]
})
export class HotNewsComponent implements OnInit {
  listNews=[
    'Mua 1 tặng 1',
    'Giảm giá đến 20%'
  ]
  counter=0;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.counter++;
      if(this.counter>this.listNews.length-1){
        this.counter=0;
      }
      console.log(this.counter)
    },5000);
  }

}
