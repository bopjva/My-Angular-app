import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school/school.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showUserandLogout: boolean;
  userDetails: any;
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor(private router: Router, private schoolService: SchoolService, private store: Store<AppState>, private loginService: LoginService) { }
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {
    this.store.select(state => state.homeState.loginStatus).subscribe(res => {
      this.showUserandLogout = res;
    })
    this.store.select(state => state.homeState.userDetails).subscribe(res => {
      this.userDetails = res;
    })

  }
  homeRoute() {
    // navigate to other tabs by clicking on given links
    this.router.navigate(['/home']);

    // console.log('homeRoute');
  }
  employeeRoute() {
    this.router.navigate(['/employee']);

    // console.log('employeeRoute');
  }
  customerRoute() {
    this.router.navigate(['/customer']);

    // console.log('customerRoute');
  }
  aboutRoute() {
    console.log('sending data to store')
    console.log('1')
    this.store.dispatch({ type: LOAD_SPINNER, payload: true });
    this.schoolService.getStudentIds();
    this.router.navigate(['/about']);


    // console.log('aboutRoute');
  }
  studentRoute() {
    this.router.navigate(['/student']);
  }
  userRoute() {
    this.router.navigate(['/user']);
  }
  schoolRoute() {
    this.router.navigate(['/school']);
  }
  logOut() {

    this.loginService.loggedOut();
  }


}
