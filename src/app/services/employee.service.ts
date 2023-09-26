import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeList: any = [
    {name: 'Nhut', dept: 'EET', age: 22}
  ];

  constructor() { }

  getEmployeeList() {
    return this.employeeList;
  }

  addEmployee(employee: any) {
    const currentList = this.employeeList.slice(); // Tạo một bản sao của mảng
    currentList.push(employee);
    this.employeeList = currentList; // Gán lại cho mảng gốc
    this.employeeList.next(currentList);
  }
}