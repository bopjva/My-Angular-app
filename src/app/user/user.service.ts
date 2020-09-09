import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { GET_ALL_STUDENTS } from '../action';
import { AppState } from '../reducer';
import { ResponseModel } from '../school/models/ResponseModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }
  getAllStudentData() {
    this.http.get<ResponseModel>('http://localhost:3010/api/student').subscribe(res => {
      this.store.dispatch({ type: GET_ALL_STUDENTS, payload: res.data });
    });

  }
}
