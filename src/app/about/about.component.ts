import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolService } from '../school/school.service';
import { SpinnerService } from '../shared-path/spinner.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  // I will use redux
  idList: any;
  studentData: any;
  showData: boolean = false;
  constructor(private schoolService: SchoolService, private spinnerService: SpinnerService) {
    console.log('1');
  }
  // same as constructor and executed before constructor
  ngOnInit(): void {
    console.log('2');
    this.getAllIds();
  }
  getAllIds() {
    this.spinnerService.loadSpinner(true);
    this.schoolService.getStudentIds().subscribe(res => {
      this.idList = res;
      console.log(this.idList);
      this.spinnerService.loadSpinner(false);

    });

  }
  idChange(event: any) {
    // make spinner on
    this.spinnerService.loadSpinner(true);
    console.log(event);
    this.schoolService.getStudentId(event).subscribe(res => {
      console.log(res);
      this.studentData = res;
      console.log(this.studentData);
      this.showData = true;
      this.spinnerService.loadSpinner(false);
      // make spinner off

    });
  }
  ngOnDestroy() {
    console.log('AboutusComponent Destroyed');
  }
}
