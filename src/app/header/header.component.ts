import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../school/school.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor(private router: Router, private schoolService: SchoolService, private store: Store<AppState>) { }
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {

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
  schoolRoute() {
    this.router.navigate(['/school']);
  }
}
