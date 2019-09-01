import { Component, OnInit } from '@angular/core';

import {EmployeeService} from "../employeesservices/employee.service"

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  locations: string[] = ["Bangalore", "Chennai", "Hyderabad", "Pune"];

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  employee: any;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
    this._employeeService.getEmployee(this.id).subscribe((data : any[])=>{
      console.log("get edit employee:",data);
      this.employee = data;
    })
  }

  onSubmit(formValue: any) {
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let updatedEmployee = {
      id: this.employee.id,
      name: formValue.name,
      location: formValue.location,
      email: formValue.email,
      mobile: formValue.mobile
    };
    this._employeeService.updateEmployee(updatedEmployee).subscribe((data : any[]) =>{
      console.log("Employee updated: ", data);
    });

    this.router.navigate(['employees']);
  }

}
