import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolService } from '../school/school.service';
import { SpinnerService } from '../shared-path/spinner.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducer';
import { LOAD_SPINNER } from '../action';
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
  constructor(private schoolService: SchoolService, private spinnerService: SpinnerService, private store: Store<AppState>) {
    // console.log('1');
  }
  // same as constructor and executed before constructor
  ngOnInit(): void {
    console.log('6');
    this.store.select(state => state.homeState.idList).subscribe(res => {
      console.log('7');
      this.idList = res;
      console.log('8');

    })
    this.store.select(state => state.homeState.student).subscribe(res => {
      this.studentData = res;
    })

    // this.getAllIds();
  }
  // getAllIds() {
  //   this.spinnerService.loadSpinner(true);
  //   this.schoolService.getStudentIds().subscribe(res => {
  //     this.idList = res;
  //     console.log(this.idList);
  //     this.spinnerService.loadSpinner(false);

  //   });

  // }
  idChange(id: any) {
    // make spinner on
    // this.spinnerService.loadSpinner(true);
    this.store.dispatch({ type: LOAD_SPINNER, payload: true })
    console.log(id);
    this.schoolService.getStudentId(id);
    this.showData = true;
  }
  ngOnDestroy() {
    console.log('AboutusComponent Destroyed');
  }
}
