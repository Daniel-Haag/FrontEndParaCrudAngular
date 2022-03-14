import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0
  }

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    if (id != null){
      this.productService.getProductByID(id).subscribe(product => {
        this.product = product;
      });
    }
  }

  delete(){
    const url = this.activeRoute.snapshot.paramMap.get('id');
    this.productService.deleteProduct(this.product).subscribe(() =>{
    this.router.navigate(['products']);
    this.productService.showMessage("Produto excluído com sucesso!");  
    });
  }

  cancel(){
    this.router.navigate(['products']);
  }

}
