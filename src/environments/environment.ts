export const URL={
  URL: "http://localhost:8080/",
  //URL: "http://10.0.11.103:8080/"
}

export const environment = {
  production: false,
  //product
  PRODUCT_ALL:"product/all",
  GET_PRODUCT_BY_ID:"product/getProdbyId/",
  GET_PRODUCT_BY_GENDER:"product/getProduct?",

  //brand
  GETBRANDBYID:"brand/getBrand/",
  GET_SIZE_BRAND_BY_GENDER:"size/getSizebyGender/",
  GET_BRAND_ALL:"brand/all",


  //stock
  GETSTOCKPRODUCT:"stock/stockProduct/",

  //cart
  POST_CART:"cart/add",
  GET_CART:"cart/getCart/",

  //detail cart
  POST_DETAIL_CART:"detailcart/add",
  DELETE_DETAIL_CART:"detailcart/delete/",
  GET_DETAIL_CART:"detailcart/getDetail/",
  UPDATE_DETAIL_CART:"detailcart/update/",

  //favorite
  POST_FAVORITE:"favorite/add/",
  DELETE_FAVORITE:"favorite/delete/",

  //user
  GET_USER:"user/getUser/",

  //discount
  GET_DISCOUNT:"discount/getDiscount",

  //shipping
  POST_SHIPPING:"shipping/add"
};


