export interface Product{
  id_product:string,
  color:string,
  description:string,
  name:string,
  price:number,
  trending:number,
  id_brand:string,
  img:string,
  sub_img:string,
  gender:number
}
export interface Brand{
  id_brand:string,
  brand:string,
  table_size:string,
  products:Product[],
  size:any[]
}
