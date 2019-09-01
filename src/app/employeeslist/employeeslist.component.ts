import { Component, OnInit } from '@angular/core';
// import {EmployeesService} from "../employeesservices/employeeAPI.service"
import {EmployeeService} from "../employeesservices/employee.service"

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {
  
  title: string = "Employee List" ;
  employees: any[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((data : any[])=>{
      this.employees = data;
    })
  }

  deleteEmployee(id: any){
    this._employeeService.deleteEmployee(id).subscribe((data: any[])=>{
          console.log("Employee deleted: ", data);
    })

    this._employeeService.getEmployees().subscribe((data: any[])=>{
      this.employees = data;
})
}

}