import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  navigateToEmployeeCreate(): void {
    console.log("Navegando...");
    this.router.navigate(['/employees/create']);
  }

}