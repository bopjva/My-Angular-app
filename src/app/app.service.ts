// command used to create service "ng g s name of the folder "
import { Injectable } from '@angular/core';
// setup HTTP client by follwing below steps
// install latest http to package.json by using this coomand in terminal"npm install @angular/http@latest"
// import HTTP client to interact with backend sysytems
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // constructor function print by defult without calling it
  //  In constructor, declare  private variable as http by defining type as HttpClient
  constructor(private http: HttpClient) { }
  // getCaseInfoById is created with single attribute having string type
  getCaseInfoById(caseNumber: string) {
    console.log(caseNumber);
    // This is where we write code to send request to backend
    // let use for defining the variable here as url1 by assigning the actual url came from backend and binding caseNumber we are looking by $ sign
    let url1: string = `http://dummy.restapiexample.com/api/v1/employees/${caseNumber}`;
    console.log(url1);
    // let url = 'http://dummy.restapiexample.com/api/v1/employeesurl:string/';
    // let finalUrl = url + caseNumber;
    // this refers to AppService ; calling http client by using get method to get data from url1 as given below as varible
    this.http.get(url1);
  }
  getLoginSucces(username: string, password: string) {
    console.log(username);
    console.log(password);
    // Can we create url as global variable in app service ?
    let url2: string = `http://dummy.restapiexample.com/api/v1/employees/${username}${password}`;
    console.log(url2);
    this.http.get(url2);
  }
  getBillPaidInformation() {
    console.log('getBillPaidInformation called');
    // request sending to backend to get the response
    let url3: string = `http://dummy.restapiexample.com/api/v1/employees`;
    console.log(url3);
    // Backend response will be stored in below created variable "response"
    let response = this.http.get(url3);
    console.log(response);
    //  sending back response to compnent from service
    return response;
  }
}

// /api/getAllIds

// GET - TO GET DATA
// POST - CREATE DATA
// PUT  - UPDATE DATA
// DELETE - DELETE DATA
// CRUD - CREATE READ UPDATE DELETE
