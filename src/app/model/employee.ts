export class Employee {
    employeeId: number;
    fullName: string;
    email: string;
    phone: string;
    gender: string;
    dateOfJoining: string;
    depertementId: number;
    designationId: number;
    employeeType: string;
    salary: number;
    constructor() {
        this.employeeId = 0;
        this.fullName = '';
        this.email = '';
        this.phone = '';
        this .gender= '';
        this.dateOfJoining = '';
        this.depertementId = 0;
        this.designationId = 0;
        this.employeeType = '';
        this.salary = 0;
}}
export interface IDepartment {
    departmentId: number;
    departmentName: string;

}
export interface IDesignation {
    departmentId: number;
    designationId: number;
    designationName: string;

}