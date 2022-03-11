import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductUpdate(product: Product){
    console.log("Navegando...");
    this.router.navigate(['products/update']);
  }

  cancel(): void{
    this.router.navigate(['products']);
  }



}
