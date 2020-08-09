import { Component } from '@angular/core';
// impott AppService in app compenent to interact with app service
import { AppService } from './app.service';
// component is nothing but class in JS
@Component({
  // selector is unique
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // variable declaration- Global variables
  customerId: String = '498uid';
  age: number = 28;
  accountOwner: boolean = true;
  r: number;
  ssn: number;
  name: string;
  caseNumber: string;
  team: string;
  username: string;
  password: string;
  amount: number;
  // declare the showTable variable as boolean
  showTable: boolean = false;

  // OBJECT
  customer = {
    cId: 1,
    cName: 'John',
    cPhoneNum: '9087635271',
    dataUsage: '100GB',
    talkTime: 100
  };
  // Array of objects
  customerList = [
    {
      cId: 1,
      cName: 'John',
      cPhoneNum: '9087635271',
      dataUsage: '100GB',
      talkTime: 100
    },
    {
      cId: 2,
      cName: 'Ryan',
      cPhoneNum: '9087635272',
      dataUsage: '200GB',
      talkTime: 200
    },
    {
      cId: 3,
      cName: 'Tom',
      cPhoneNum: '9087635273',
      dataUsage: '300GB',
      talkTime: 300
    },
    {
      cId: 4,
      cName: 'Sam',
      cPhoneNum: '9087635274',
      dataUsage: '400GB',
      talkTime: 400
    }
  ];

  // employeeList: any = 'Hi';
  // constructor function print by defult without calling it
  //  calling app service in constructor by passing as variable
  constructor(private appService: AppService) {
    // console log prints the data in console in the browser
    console.log('constructor called');
  }

  someFunction() {
    //code
    // calling other function (customerId)here in this function(someFunction)
    // any statment should be ends with semi colon
    this.customerId = '235uid';
    this.age = 18;
    console.log('Search Function called');
    // console is printing bthe data of object customer cId value
    console.log(this.customer.cId);
    // console is pronting the data of object customer's talktime
    console.log(this.customer.talkTime);
    // console is printing the data of first customer cName arrays object customerList
    console.log(this.customerList[1].cName);
    // console is printing the data of customerList object length only
    console.log(this.customerList.length);

    // this.x , this refers to the class name in JS
    this.add(7, 9);
    this.ssn;
    this.name;
    this.team;
  }
  add(x: number, y: number) {
    // (let a) variavle is local variable to add function and cannot be used any where in the component/class
    let a: string = 'Hi';
    this.r = x + y;
    console.log('add function called');

    // console.log('Addition Function Called');
    this.addingNumberStringFunction('Rob', 49);
  }
  addingNumberStringFunction(x: string, y: number) {
    console.log('Third function called');
    // console.log('Rob', 49);
  }
  add3NumbersFunction(x: number, y: string, z: boolean) {
    console.log('Fourth function called');
    console.log(x);
    console.log(y);
    console.log(z);
  }
  testFunction(id: number, name: string, phoneNumber: string, age: number) {
    console.log('testFunction called');
    console.log(id);
    console.log(name);
    console.log(phoneNumber);
    console.log(age);
  }
  loginFunction(username: string, password: string) {
    console.log('login function called');
    // console.log(text);
    console.log(this.username);
    console.log(this.password);
    this.appService.getLoginSucces(this.username, this.password);
  }
  enterAccountDetails(mdn: string, password: string) {
    console.log('enterAccountDetails function called');
    console.log(mdn);
    console.log(password);
  }
  payBillFunction(amount: number, cardDetails: string) {
    console.log('payBillFunction called');
    // below is the sytax for console log to print variable values of any function
    console.log(amount);
    console.log(cardDetails);
  }
  billHistoryFunction(
    month1: string,
    bill1: number,
    month2: string,
    bill2: number
  ) {
    console.log('billHistoryFunction called');
    console.log(month1);
    console.log(bill1);
    console.log(month2);
    console.log(bill2);
    this.functionName(1, 2, 3);
  }

  functionName(a: number, b: number, c: number) {}
  caseNumberSearch() {
    // console is printing the caseNumber value
    console.log(this.caseNumber);
    // this refers  to app component and it is calling the app service having function getCaseInfoById to get the getCaseInfoById info by calling the golbal varible caseNumber
    this.appService.getCaseInfoById(this.caseNumber);
  }
  // calling the service with no  parameters assigned in payBalanceDueFunction-> 0 argument function
  // payBalanceDueFunction() {
  //   console.log('payBalanceDueFunction called');
  //   // console.log(this.amount);
  //   // subscribe is to use capture the reponse from service
  //   this.appService.getBillPaidInformation().subscribe(result => {
  //     //showtable will show table header when the condition is true ; showtable intialized as condition false at line 24
  //     this.showTable = true;
  //     //result = {data: [], status: 'success'}
  //     console.log(result);
  //     // printing the  emplyeelist on html as result object mentioned above in column 117
  //     this.employeeList = result;
  //     console.log(this.employeeList);
  //     console.log(this.employeeList.data.length);

  //     for (let i = 0; i < this.employeeList.data.length; i++) {
  //       // if else condition print here both young and old
  //       if (this.employeeList.data[i].employee_age <= 50) {
  //         console.log(this.employeeList.data[i].employee_age, 'Young');
  //       } else {
  //         console.log(this.employeeList.data[i].employee_age, 'Old');
  //       }
  //       // if condition prints the yound data
  //       // if (this.employeeList.data[i].employee_age <= 50) {
  //       // console.log(this.employeeList.data[i].employee_age, 'Young');
  //       // }
  //       // console.log(this.employeeList.data[i].employee_age);
  //       // this.employeeList.data[i].age;
  //     }
  //   });
  // }
  // let keyword use to create local variable to specific function
  forLoopFunction() {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 == 1) {
        console.log(i);
      }

      // console.log(i);
    }

    console.log('forLoopFunction');
  }
}
