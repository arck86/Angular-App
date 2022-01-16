
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  // Observable Prueba
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient){

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  // Fin Observable


  // getProducts(): IProduct[]{
  //   return [
  //     {
  //       "productId":2,
  //       "productName": "Garden Cart",
  //       "productCode": "GDN-0023",
  //       "releaseDate": "March 18, 2021",
  //       "description": "Descripcion del cortador de cesped",
  //       "price": 32,
  //       "starRating": 2.5,
  //       "image": "assets/images/garden-cart.png",
  //     },{
  //       "productId":5,
  //       "productName": "Hammer",
  //       "productCode": "TBX-0028",
  //       "releaseDate": "March 18, 2021",
  //       "description": "Descripcion del martillo",
  //       "price": 8,
  //       "starRating": 4.8,
  //       "image": "assets/images/hammer.png",
  //     }
  //   ];
  // }
}