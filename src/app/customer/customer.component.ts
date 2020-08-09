import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function

  constructor() {
    console.log('CustomerComponent constructor called');
  }
  // ngOnInit also function and executed by defaukt when call the component and this relates to angular
  ngOnInit() {
    console.log('CustomerComponent ngOnInit called');
  }
  ngOnDestroy() {
    console.log('CustomerComponent Destroyed');
  }
}
