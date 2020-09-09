import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseModel } from './models/ResponseModel';
import { SharedPathService } from '../shared-path/shared-path.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER, STUDENT_ID_LIST, STUDENT_BY_ID } from '../action';
// import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient, private sharedPathService: SharedPathService, private store: Store<AppState>) {

  }
  getAllStudents() {
    console.log('2');
    let url: string = 'http://localhost:3010/api/student';
    // console.log(url);
    let response = this.http.get(url);
    console.log('3');
    return response;
  }
  getStudentById(id: string) {
    console.log('6');
    let url: string = `http://localhost:3010/api/student/${id}`;
    // console.log(url);
    // let response = this.http.get<ResponseModel>(url);
    // console.log(response);
    // return response;
    return this.http.get<ResponseModel>(url);
  }
  addStudent(studentData: any) {
    console.log(studentData);
    let url: string = 'http://localhost:3010/api/student';
    //  How you pass dynamic params to url
    let response = this.http.post(url, studentData);
    console.log(response);
    return response;
  }
  getUpdateStudentInfo(studentData: any) {
    console.log('getUpdateStudentInfo function called');
    let url: string = 'http://localhost:3010/api/student/:id';
    console.log(url);
    let response = this.http.put(url, studentData);
    console.log(response);
    return response;
  }

  getCustomerByAge(user: any) {
    console.log('5');
    console.log(user)
    let url1 = `http://localhost:3010/api/student?year=${user.year}&age=${user.country}&pNo=${user.studentPhoneNumber}`;
    console.log(url1);
    let url: string = 'http://localhost:3010/api/student';
    this.http.get(url).subscribe(result => {
      this.sharedPathService.getCustomerAge(result);

    });

  }

  getStudentData(student: any) {
    console.log(student);
    let url = `http://localhost:3010/api/student?course=${student.studentCourse}&id=${student.studentId}&pNo=${student.studentPhoneNumber}&year=${student.studentYear}`;
    console.log(url);
    let url1: string = ' http://localhost:3010/api/student';
    this.http.get(url1).subscribe(res => {
      this.sharedPathService.getCustomerAge(res);
    })


  }
  getStudentIds() {
    console.log('3')
    // let headers = new Headers()
    let token = sessionStorage.getItem('token');
    const h = new HttpHeaders({ 'Authorization': token });
    let url = 'http://localhost:3010/api/getAllIds';
    this.http.get<ResponseModel>(url, { headers: h }).subscribe(res => {
      this.store.dispatch({ type: LOAD_SPINNER, payload: false });
      console.log('4')
      this.store.dispatch({ type: STUDENT_ID_LIST, payload: res.data });

    }, (err) => {
      console.log(err);
    });

    // /api/student/:id

  }
  getStudentId(id: any) {

    let url1 = `http://localhost:3010/api/student/${id}`;

    this.http.get<ResponseModel>(url1).subscribe(res => {
      this.store.dispatch({ type: LOAD_SPINNER, payload: false });
      this.store.dispatch({ type: STUDENT_BY_ID, payload: res.data })

      // make spinner off

    }, (err) => {
      console.log(err);
    });

  }
  deleteData(id: string) {
    let url = `http://localhost:3010/api/student/${id}`;
    return this.http.delete(url);
  }

  // http://localhost:3010/api/getAllIds
  //   string params
  // http://localhost:4200/api/student/getById/CT0014


  // query params
  // http://localhost:4200/api/student?name='bhargav'&state='va'&age=27
}
