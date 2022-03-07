import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from  "./views/product-crud/product-crud.component";
import { ContatoComponent } from  "./views/contato/contato.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { EmployeeCrudComponent } from './views/employee-crud/employee-crud.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "contato",
  component: ContatoComponent
}
,
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "employees",
  component: EmployeeCrudComponent
},
{
  path: "employees/create",
  component: EmployeeCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
