import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EmployeeslistComponent } from './employeeslist/employeeslist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeService } from './employeesservices/employee.service';
import { EmployeesfilterPipe } from './employeesfilter.pipe';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './employeesservices/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    EmployeeslistComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    EmployeedetailsComponent,
    EmployeesfilterPipe
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'about',
        component:MainpageComponent
      },
      {
        path:'employees',
        component:EmployeeslistComponent
      },
      {
        path:'employees/:id',
        component:EmployeedetailsComponent
      },
      {
        path:'addEmployee',
        component:AddemployeeComponent
      },
      {
        path:'editEmployee/:id',
        component:EditemployeeComponent
      }
      
    ])
  ],
  providers: [EmployeeService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
