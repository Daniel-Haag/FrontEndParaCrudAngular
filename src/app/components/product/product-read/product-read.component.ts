import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];

  private ELEMENT_DATA: Product[] = []
  
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  dataSource = this.ELEMENT_DATA;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.read().subscribe(products => {
      this.products = products;
      this.dataSource = products;
    });
  }
}
