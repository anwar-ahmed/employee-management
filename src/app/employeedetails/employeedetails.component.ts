import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import {EmployeeService} from "../employeesservices/employee.service"

import "rxjs/add/operator/map";

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  id: any;
  employee: any;

  constructor(private _employeeService: EmployeeService,private router: Router, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });
    this._employeeService.getEmployee(this.id).subscribe((data : any[])=>{
      console.log("Employee Detail:",data);
      this.employee = data;
    })
  }

  goBack(): void {
    this.router.navigate(['employees']);
  }

}
