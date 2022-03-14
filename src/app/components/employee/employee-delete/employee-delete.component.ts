import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css'],
})
export class EmployeeDeleteComponent implements OnInit {
  employee: Employee = {
    name: '',
    age: 0,
    salary: 0,
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.activeRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.employeeService.readByID(id).subscribe((employee) => {
        this.employee = employee;
      });
    }
  }

  delete() {
    var id = this.activeRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.employeeService.delete(id).subscribe(() => {
        this.employeeService.showMessage('Funcionário excluído com sucesso!');
        this.router.navigate(['employees']);
      });
    }
  }

  cancel() {
    this.router.navigate(['employees']);
  }
}
