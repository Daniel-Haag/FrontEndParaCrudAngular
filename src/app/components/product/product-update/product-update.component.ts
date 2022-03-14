import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

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

  constructor(private productService: ProductService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id !== null){
        this.productService.getProductByID(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  update(){
      this.productService.update(this.product).subscribe(product => {
      this.product = product;
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(['products']);
    });
  }

  cancel(): void{
    this.router.navigate(['products']);
  }
}
