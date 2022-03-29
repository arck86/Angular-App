import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `:  ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Name',
      'productCode': 'Code',
      'releaseDate': 'Date',
      'description': 'Description',
      'price': 19.95,
      'starRating': 3.2,
      'image': 'assets/images/saw.png'
    };
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
