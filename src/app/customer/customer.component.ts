import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchoolService } from '../school/school.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customerResponse: any;
  showTable: boolean = false;

  //  constructor also function and executed by defaukt when call the component and this relates to type script
  // constructor executes before the  ngOnInit function
  customerForm: FormGroup;
  constructor() {
    console.log('CustomerComponent initializing flow');
    console.log('1');
  }
  ngOnInit() {

  }




store = {
  searchResults: [],
  statesData: [],
  formData: any,
}

// updating data into searchResults
store = {
  searchResults: [{}, {}, {}],
  statesData: [],
  formData: any,
}


// updating data into statesData
store = {
  searchResults: [],
  statesData: [va, ca, md],
  formData: any,
}


// updating data into formData
store = {
  searchResults: [],
  statesData: [],
  formData: {name: '', id:''},
}























}
