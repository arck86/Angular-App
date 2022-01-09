import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs";
import { IProduct } from "../product/product";
import { ProductService } from "../product/product.service";
import { StarComponent } from "../product/star/star.component";

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
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

  constructor(private productService: ProductService){
  }

  products: IProduct[] = [];
  toggleImage(): void{
    this.showImage = ! this.showImage;
  }

  ngOnInit(): void{
    this.products = this.productService.getProducts();
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