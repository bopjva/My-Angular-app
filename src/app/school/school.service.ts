import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './models/ResponseModel';
import { SharedPathService } from '../shared-path/shared-path.service';
import { GlobalResponseModel } from '../models/GlobalResponse.model';
import { Observable } from 'rxjs/internal/Observable';
import { ListModels } from '../models/ListModels';
import { Store } from '@ngrx/store';
import { StudentModel } from '../models/StudentModel';
import * as homeActions from '../actions';
import * as fromRootReducer from '../app.reducer';
import { LOAD_SPINNER, SCHOOL_STUDENTS_FETCH } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient,
    private store: Store<fromRootReducer.AppState>,
    private sharedPathService: SharedPathService) {

  }
  getAllStudents() {
    console.log('2');
    let url: string = 'http://localhost:3000/api/student';
    // console.log(url);
    let response = this.http.get(url);
    console.log('3');
    return response;
  }
  getStudentById(id: string) {
    console.log('6');
    let url: string = `http://localhost:3000/api/student/${id}`;
    // console.log(url);
    // let response = this.http.get<ResponseModel>(url);
    // console.log(response);
    // return response;
    return this.http.get<ResponseModel>(url);
  }
  addStudent(studentData: any) {
    console.log(studentData);
    let url: string = 'http://localhost:3000/api/student';
    //  How you pass dynamic params to url
    let response = this.http.post(url, studentData);
    console.log(response);
    return response;
  }
  getUpdateStudentInfo(studentData: any) {
    console.log('getUpdateStudentInfo function called');
    let url: string = '';
    console.log(url);
    let response = this.http.put(url, studentData);
    console.log(response);
    return response;
  }

  getCustomerByAge(user: any) {
    console.log('5');
    console.log(user)
    let url1 = `http://localhost:3000/api/student?year=${user.year}&age=${user.country}&pNo=${user.studentPhoneNumber}`;
    console.log(url1);
    let url: string = 'http://localhost:3000/api/student';
    this.http.get(url).subscribe(result => {
      this.sharedPathService.getCustomerAge(result);

    });

  }

  getStudentData(student: any) {
    console.log(student);
    let url = `http://localhost:3000/api/student?course=${student.studentCourse}&id=${student.studentId}&pNo=${student.studentPhoneNumber}&year=${student.studentYear}`;
    console.log(url);
    let url1: string = ' http://localhost:3000/api/student';
    this.http.get<ListModels>(url1).subscribe(res => {
      this.sharedPathService.getCustomerAge(res);
    })


  }
  getStudentIds() {
    let url = 'http://localhost:3000/api/getAllIds';

    return this.http.get<GlobalResponseModel>(url).subscribe((res) => {
      this.store.dispatch({ type: homeActions.FETCH_IDS, payload: res.data });
      this.store.dispatch({type: LOAD_SPINNER, payload: false});
    });;

  }
  // : Observable<GlobalResponseModel>
  getStudentId(id: any) {
    let url1 = `http://localhost:3000/api/student/${id}`;
    this.http.get<GlobalResponseModel>(url1).subscribe((res: GlobalResponseModel) => {
      this.store.dispatch({ type: homeActions.SEARCH_RESULTS, payload: res.data });
      this.store.dispatch({type: LOAD_SPINNER, payload: false});
    });
  }
  // http://localhost:3000/api/getAllIds
  //   string params
  // http://localhost:4200/api/student/getById/CT0014


  // query params
  // http://localhost:4200/api/student?name='bhargav'&state='va'&age=27
}
