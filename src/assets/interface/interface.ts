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
export interface Cart{
  id_user:number,
  subtotal:number,
  discount:number,
  total:number
}
export interface User{
  id_user:any,
  fullname:string,
  address:string,
  birthday:any,
  phone:string,
  gender:number,
  email:string,
  username:string,
  password:string,
  role:string
}
export interface Brand{
  id_brand:string,
  brand:string,
  table_size:string,
  products:Product[],
  size:any[]
}
