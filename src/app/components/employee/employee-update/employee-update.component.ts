import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee = {
    name: 'teste',
    age: 0,
    salary: 0
  }

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    var id = this.activeRoute.snapshot.paramMap.get('id');
    if (id != null){
      this.employeeService.readByID(id).subscribe(employee => {
        this.employee = employee;
      });
    }
  }

  update(){
    var id = this.activeRoute.snapshot.paramMap.get('id');
    this.employeeService.update(this.employee).subscribe(() => {
    this.employeeService.showMessage("Funcionário atualizado com sucesso!");  
    this.router.navigate(['employees']);
    })
  }

  cancel(){
    this.router.navigate(['employees']);
  }

}
