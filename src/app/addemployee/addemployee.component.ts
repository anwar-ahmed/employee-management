import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {EmployeeService} from "../employeesservices/employee.service"

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent  {

  locations: string[] = ["Bangalore", "Chennai", "Hyderabad", "Pune"];
  employeesCount: number;

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  onSubmit(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));

    this._employeeService.getEmployees().subscribe((data : any[])=>{
      this.employeesCount = data.length;
    })   

    let newEmployee = {
      id: this.employeesCount + 1,
      name: formValue.name,
      location: formValue.location,
      email: formValue.email,
      mobile: formValue.mobile
    };
    this._employeeService.addEmployee(newEmployee).subscribe((data: any[])=>{
      console.log("Employee Added: ", data);
    });
    this.router.navigate(['employees']);
  }
}
