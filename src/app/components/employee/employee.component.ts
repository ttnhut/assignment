import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    constructor(private employeeService: EmployeeService) {

    }
    ngOnInit() {
      console.log(this.dataSource = this.employeeService.getEmployeeList());
    }
    displayedColumns: string[] = ['name', 'dept', 'age', 'action'];
    dataSource = this.employeeService.getEmployeeList()
 }

