import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) {
   }

  showOnConsole(msg: string): void {
    console.log(msg);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl);
  }

  update(product: Product): Observable<Product>{
     const url = `${this.productsUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }

  getProductByID(id: string): Observable<Product>{
    const url = `${this.productsUrl}/${id}`
    return this.http.get<Product>(url);
  }

}
