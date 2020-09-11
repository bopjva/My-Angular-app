import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './school/models/ResponseModel';
import { Store } from '@ngrx/store';
import { USER_DETAILS, LOGIN_STATUS } from './action';
import { AppState } from './reducer';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { HttpBackendClientService } from './httpbackendclient.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient, private store: Store<AppState>, private router: Router, private httpBackend: HttpBackendClientService) { }
  getloginCredentials(loginCredentials: any) {

    console.log(loginCredentials);
    // console.log(token);
    // console.log(headers);
    this.httpBackend.post<ResponseModel>("http://localhost:3010/api/login", loginCredentials).subscribe(res => {
      // console.log(res);
      // console.log(res.data.token);
      // console.log(res.data.formattedUser);

      sessionStorage.setItem("token", res.data.token);
      this.store.dispatch({ type: USER_DETAILS, payload: res.data.formattedUser });
      this.store.dispatch({ type: LOGIN_STATUS, payload: true });
      this.router.navigate(['./home']);
    }, err => {
      console.log(err);
    })
  }

  loggedOut() {
    this.http.get("http://localhost:3010/api/logout").subscribe(res => {
      sessionStorage.clear();
      console.log(res);
      this.store.dispatch({ type: USER_DETAILS, payload: { userName: '', role: '' } });
      this.store.dispatch({ type: LOGIN_STATUS, payload: false });
      this.router.navigate(['./login']);

    })
  }
}
