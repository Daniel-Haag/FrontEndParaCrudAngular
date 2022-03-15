import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';

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
      return this.http.post<Employee>(this.employeesUrl, employee).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    read(): Observable<Employee[]>{
      return this.http.get<Employee[]>(this.employeesUrl).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    readByID(id: string): Observable<Employee>{
      var url = `${this.employeesUrl}/${id}`;
      return this.http.get<Employee>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    update(employee: Employee): Observable<Employee>{
      var url = `${this.employeesUrl}/${employee.id}`;
      return this.http.put<Employee>(url, employee).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    delete(id: string): Observable<Employee>{
      var url = `${this.employeesUrl}/${id}`;
      return this.http.delete<Employee>(url).pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }

    errorHandler(e: any): Observable<any>{
      this.showMessage("Ocorreu um erro!");
      return EMPTY;
    }
}
