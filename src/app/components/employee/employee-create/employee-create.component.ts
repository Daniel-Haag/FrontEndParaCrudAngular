import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = {
    name: '',
    age: 0,
    salary: 0
  }

  constructor(private employeeService: EmployeeService,
    private router: Router) {

   }

  ngOnInit(): void {

  }

    createEmployee(){
      console.log('chamou o método createEmployee')
      this.employeeService.create(this.employee).subscribe(() => {
        this.employeeService.showMessage('Novo funcionário cadastrado!');
        this.router.navigate(['employees']);
      });
    }

}
