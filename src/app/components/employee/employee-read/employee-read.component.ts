import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.css']
})
export class EmployeeReadComponent implements OnInit {

  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'name', 'age', 'salary', 'action'];
  dataSource: Employee[] = [];

  constructor(private employeeService: EmployeeService) {

   }

  ngOnInit(): void {
    this.employeeService.read().subscribe(employees => {
    this.employees = employees;
    this.dataSource = employees;
    });
  }

}
