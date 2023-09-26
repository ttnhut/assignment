import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(
    private employeeService:EmployeeService,
    private router:Router
  ) {}
  employee:any = {
    name: '',
    dept: '',
    age: 0
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.employee)
    this.router.navigate(['/employee'])
  }
}
