import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  constructor(private router: Router) {}
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular

  ngOnInit() {}
  footerFunction() {}
  contactUs() {
    // navigate to other tabs by clicking on given links
    this.router.navigate(['/contact']);
    console.log('contactUs called');
  }
  copyRight() {
    this.router.navigate(['/copyright']);

    console.log('copyright');
  }
  careers() {
    this.router.navigate(['/careers']);

    console.log('careers');
  }
  // aboutRoute() {
  //   this.router.navigate(['/about']);

  // console.log('aboutRoute');
  // }
}
