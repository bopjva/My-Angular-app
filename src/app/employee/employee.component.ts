import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { SpinnerService } from '../shared-path/spinner.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  showTable: boolean = false;
  employeeList: any;
  newEmpList: Array<any> = [];
  //ngOnInit same as constructor and executed before constructor
  ngOnInit() {
    console.log('EmployeeComponent ngOnInit called');
  }
  constructor(private appService: AppService, private spinnerService: SpinnerService) {
    // console log prints the data in console in the browser
    console.log('EmployeeComponent constructor called');
  }

  // ngOnInit() {
  //   console.log('EmployeeComponent ngOnInit called');
  // }
  payBalanceDueFunction() {
    console.log('payBalanceDueFunction called');
    this.spinnerService.loadSpinner(true);

    // console.log(this.amount);
    // subscribe is to use capture the reponse from service
    this.appService.getBillPaidInformation().subscribe(result => {
      //showtable will show table header when the condition is true ; showtable intialized as condition false at line 24
      this.showTable = true;
      //result = {data: [], status: 'success'}
      console.log(result);
      // assigned  emplyeelist on html as result object mentioned above in column 117
      this.employeeList = result;
      // console is printing here the result of object "employeeList"
      console.log(this.employeeList);
      // console is printimg here length data of object "employeeList"
      console.log(this.employeeList.data.length);

      // for (let i = 0; i < this.employeeList.data.length; i++) {
      //   // if else condition print here both young and old
      //   if (this.employeeList.data[i].employee_salary <= 150000) {
      //     console.log(this.employeeList.data[i].employee_salary, 'Low Salary');
      //   } else {
      //     console.log(this.employeeList.data[i].employee_salary, 'High Salary');
      //   }
      // }
      // i=0
      // let arr = [1];
      // arr.push(4);
      // [1,2,3,4]
      // this.newEmpList = [
      //   { id: 1, name: '', ageGroup: 'older' },
      //   { id: 2, name: '', ageGroup: 'older' },
      //   { id: 3, name: '', ageGroup: 'older' }
      // ]
      this.employeeList.data.forEach((employee) => {
        if (employee.employee_age <= 40) {
          let status = 'young';
          // use spread operator to add to new variable to object
          let emp = { ...employee, ageGroup: status };
          // use push operator to add new object to array
          this.newEmpList.push(emp);
        } else {
          let status = 'older';
          let emp = { ...employee, ageGroup: status };
          this.newEmpList.push(emp);
        }
        this.spinnerService.loadSpinner(false);

      });

      // console.log(this.employeeList.data);
      // {name:'', id:1, age:20, ageGroup: 'young'}
      // for (let i = 0; i < this.employeeList.data.length; i++) {
      //   // if else condition print here both young and old
      //   if (this.employeeList.data[i].employee_age <= 50) {
      //     console.log(this.employeeList.data[i].employee_age, 'Young');
      //   } else {
      //     console.log(this.employeeList.data[i].employee_age, ' Old');
      //   }
      //   if (this.employeeList.data[i].employee_salary <= 150000) {
      //     console.log(this.employeeList.data[i].employee_salary, 'Low Salary');
      //   } else {
      //     console.log(this.employeeList.data[i].employee_salary, 'High Salary');
      //   }
      // }
      // if condition prints the yound data
      // if (this.employeeList.data[i].employee_age <= 50) {
      // console.log(this.employeeList.data[i].employee_age, 'Young');
      // }
      // console.log(this.employeeList.data[i].employee_age);
      // this.employeeList.data[i].age;
    });
  }
  ngOnDestroy() {
    console.log('EmployeeComponent Destroyed');
  }
}
