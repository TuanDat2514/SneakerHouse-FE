import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../_service/brand/brand.service";
import {ProductService} from "../../_service/product/product.service";

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent implements OnInit {
  optionList=[
    {
      id:1,
    name:"Nhãn hiệu",
    option:[],
      show:false
    },
    {
      id:2,
      name:"Giới tính",
      option:[
        {
          id:'men',
          name:"Nam",
        },
        {
          id:'woman',
          name:"Nữ",
        }
      ],
      show:false
    },
    {
      id:3,
      name:"Màu sắc",
      option:[
        {
          id:'black',
          name:"Đen",
        },
        {
          id:'white',
          name:"Trắng",
        }
      ],
      show:false
    },
  ];
  selected:any[]=[];
  isEmptySelected=true;
  modelFilter:any[]=[
    {modelFilter:''},
    {modelFilter:''},
    {modelFilter:''},
  ]
  constructor(private brandSevice:BrandService,private productService:ProductService) { }

  ngOnInit(): void {
      this.brandSevice.getBrandAll().subscribe(res => {
        const brand = res;
        // @ts-ignore
        for (let i = 0; i < brand.length;i++){
          const name={id:`brand${i}`,name:''}
          // @ts-ignore
          name.name=brand[i].brand;
          this.optionList[0].option.push(name)
        }

      })
  }
  closeFilter() {
    let i = document.getElementById("btn-filter") as HTMLElement;
    i.style.width = "0px";
    let o = document.getElementById("overlay") as HTMLElement;
    o.style.display = "none";
  }
  showOption(item:any,i:any){
    this.optionList[i].show=!this.optionList[i].show;
  }
  selectedFilter(i:any,index:any){
    this.isEmptySelected=false;
    console.log(i);
    this.modelFilter[index].modelFilter=i.name;
    console.log(this.modelFilter)
  }
  clearFilter(){
    this.isEmptySelected=true;
    this.modelFilter=[
      {modelFilter:''},
      {modelFilter:''},
      {modelFilter:''},
    ]
  }
  deleteFilter(index:any){
    this.modelFilter[index].modelFilter='';
  }
}
