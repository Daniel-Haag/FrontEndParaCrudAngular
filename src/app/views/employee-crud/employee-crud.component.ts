import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Cadastro de Funcionários',
      icon: 'person',
      routeUrl: 'employees'
    }
   }

  ngOnInit(): void {
  }

  navigateToEmployeeCreate(): void {
    this.router.navigate(['/employees/create']);
  }

}
