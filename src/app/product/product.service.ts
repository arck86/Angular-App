import { Injectable } from "@angular/core";
import { IProduct } from "./product";

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  getProducts(): IProduct[]{
    return [
      {
        "productId":2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "Descripcion del cortador de cesped",
        "price": 32,
        "starRating": 2.5,
        "image": "assets/images/garden-cart.png",
      },{
        "productId":5,
        "productName": "Hammer",
        "productCode": "TBX-0028",
        "releaseDate": "March 18, 2021",
        "description": "Descripcion del martillo",
        "price": 8,
        "starRating": 4.8,
        "image": "assets/images/hammer.png",
      }
    ];
  }
}