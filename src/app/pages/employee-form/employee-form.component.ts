import { Component, inject } from '@angular/core';
import { Employee, IDepartment } from '../../model/employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, AsyncPipe, NgFor],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  emplyeeobj: Employee = new Employee();
  employeeService = inject(EmployeeService);
  deptList$ : Observable<IDepartment[]> = new Observable<IDepartment[]>();
  constructor() {
    this.deptList$ = this.employeeService.getAllDepartments();
    this.deptList$.subscribe((res: IDepartment[]) => {  console.log(res[0].departmentName) })
  }
  onSaveEmployee() {
    this.employeeService.createNewEmployee(this.emplyeeobj).subscribe((res:Employee)=>{alert('employee created')}, error => {alert("api error")})
}}
