import { Component, OnDestroy, OnInit } from "@angular/core";
import { filter, Subscription } from "rxjs";
import { IProduct } from "../product/product";
import { ProductService } from "../product/product.service";
import { StarComponent } from "../product/star/star.component";

@Component ({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit, OnDestroy{

  pageTitle = 'Product List';
  imageWidth = 18;
  imageMargin: number  = 1;
  showImage : boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

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
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error : err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  performFilter(filterBy: string ): IProduct[]{
    filterBy = filterBy.toLocaleUpperCase();
    return this.products.filter((product : IProduct)=> product.productName.toLocaleUpperCase().includes(filterBy));
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List '+ message;
  }
}