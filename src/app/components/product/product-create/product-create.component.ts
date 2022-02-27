import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  //Atribute biding...
  propriedade = "Valor da propriedade";

  constructor() { }

  ngOnInit(): void {
  }


  //Event Biding...
  fazerAlgumaCoisa(){
    console.log('Fazendo alguma coisa...');
  }

}
