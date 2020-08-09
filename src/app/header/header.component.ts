import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor(private router: Router) {}
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {}
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
    this.router.navigate(['/about']);

    // console.log('aboutRoute');
  }
}
