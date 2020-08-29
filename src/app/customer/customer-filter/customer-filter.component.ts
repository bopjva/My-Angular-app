import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SchoolService } from 'src/app/school/school.service';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.scss']
})
export class CustomerFilterComponent implements OnInit {
  customerForm: FormGroup;
  customerResponse: any;
  showTable: boolean = false;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {
    console.log('1');

  }

  ngOnInit(): void {
    console.log('2');
    this.createForm();
  }

  createForm() {
    console.log('3');
    this.customerForm = this.fb.group({
      country: [null],
      year: [null],
      studentPhoneNumber: []


    });
  }

  searchByAge() {
    console.log('sending request to backend flow');
    console.log('4');
    console.log(this.customerForm.value);
    let user = this.customerForm.value;
    // console.table(this.customerForm.value.customerAge);
    this.schoolService
      .getCustomerByAge(user)
    // .subscribe(result => {
    //   this.customerResponse = result;
    //   console.log(this.customerResponse);
    //   this.showTable = true;
    // });
  }
}


