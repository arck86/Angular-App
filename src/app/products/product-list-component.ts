import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs";
import { IProduct } from "../product/product";
import { StarComponent } from "../product/star/star.component";

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle = 'Product List';
  imageWidth = 18;
  imageMargin: number  = 1;
  showImage : boolean = false;
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts : IProduct[] = [];
  products: IProduct[] = [
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
  toggleImage(): void{
    this.showImage = ! this.showImage;
  }

  ngOnInit(): void{
    this.listFilter = '';
  }

  performFilter(filterBy: string ): IProduct[]{
    filterBy = filterBy.toLocaleUpperCase();
    return this.products.filter((product : IProduct)=> product.productName.toLocaleUpperCase().includes(filterBy));
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List '+ message;
  }
}