import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  SERVER_URL: string = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  public getEmployees(){ 
       return this.httpClient.get(this.SERVER_URL + 'employees');
  }

  public getEmployee(id:any){
       return this.httpClient.get(`${this.SERVER_URL + 'employees'}/${id}`); 
  }
  public addEmployee(employee: any){
      return this.httpClient.post(`${this.SERVER_URL + 'employees'}`,employee)
  }

  public deleteEmployee(id:any){
      return this.httpClient.delete(`${this.SERVER_URL + 'employees'}/${id}`)
  }
  public updateEmployee(employee: any){
      return this.httpClient.put(`${this.SERVER_URL + 'employees'}/${employee.id}`,employee)
  }

}

