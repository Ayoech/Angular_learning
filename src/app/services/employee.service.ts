import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, IDepartment, IDesignation } from '../model/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = 'https://api.freeprojectapi.com/api/EmployeeApp';

  constructor(private http: HttpClient) {


   }
   createNewEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.apiUrl}/CreateEmployee`, employee);
   }
   getAllDepartments(): Observable<IDepartment[]> {
    console.log(this.http.get(`${this.apiUrl}/GetDepartments`))
    return this.http.get<IDepartment[]>(`${this.apiUrl}/GetDepartments`)
    
   }
   getDesignationbyDepartmentId(departmentId: number):Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>(`${this.apiUrl}/GetDesignationsByDeptId?departmentId=${departmentId}`);
   }
}
