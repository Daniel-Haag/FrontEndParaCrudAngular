import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {ProductCrudComponent} from  "./views/product-crud/product-crud.component";
import {ContatoComponent} from  "./views/contato/contato.component";

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},{
  path: "contato",
  component: ContatoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
