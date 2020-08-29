import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolService } from '../school/school.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  idList: any;
  studentData: any;
  showData: boolean = false;
  constructor(private schoolService: SchoolService) {
    console.log('1');
  }
  // same as constructor and executed before constructor
  ngOnInit(): void {
    console.log('2');
    this.getAllIds();
  }
  getAllIds() {
    this.schoolService.getStudentIds().subscribe(res => {
      this.idList = res;
      console.log(this.idList);
    });

  }
  idChange(event: any) {
    console.log(event);
    this.schoolService.getStudentId(event).subscribe(res => {
      console.log(res);
      this.studentData = res;
      console.log(this.studentData);
      this.showData = true;

    });
  }
  ngOnDestroy() {
    console.log('AboutusComponent Destroyed');
  }
}
