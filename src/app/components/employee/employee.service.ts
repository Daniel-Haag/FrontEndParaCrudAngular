import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl = "http://localhost:3001/employees";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) {
     }

     showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
    }

    create(employee: Employee): Observable<Employee>{
      return this.http.post<Employee>(this.employeesUrl, employee);
    }

    read(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.employeesUrl);
    }
}
