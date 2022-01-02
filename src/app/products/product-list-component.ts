import { Component } from "@angular/core";

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent{
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      "productId":2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "Descripcion del cortador de cesped",
      "price": 32,
      "starRating": 4.2,
      "image": "Nada",
    },{
      "productId":5,
      "productName": "Hammer",
      "productCode": "TBX-0028",
      "releaseDate": "March 18, 2021",
      "description": "Descripcion del martillo",
      "price": 8,
      "starRating": 4.8,
      "image": "Nada",
    }
  ]
}