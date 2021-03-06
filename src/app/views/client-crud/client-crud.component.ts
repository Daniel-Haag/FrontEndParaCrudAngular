import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Clientes",
      icon: "person",
      routeUrl: "/"
    }
   }

  ngOnInit(): void {
  }

  navigateToClientCreate(){
    this.router.navigate(['/clients/create']);
  }

}
