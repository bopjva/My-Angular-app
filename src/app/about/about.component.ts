import { Component, OnInit, OnDestroy } from '@angular/core';
import { SchoolService } from '../school/school.service';
import { GlobalResponseModel } from '../models/GlobalResponse.model';
import { Observable } from 'rxjs';
import { StudentModel } from '../models/StudentModel';
import { ListModels } from '../models/ListModels';
import { Store } from '@ngrx/store';
import * as fromRootReducer from '../app.reducer';
import { map } from 'rxjs/operators';
import * as h from '../store/home.reducer';
import * as  appState from '../app.reducer';
import { LOAD_SPINNER } from '../actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  idList: any;
  studentData: StudentModel;
  showData: boolean = false;

  constructor(private schoolService: SchoolService,
    private store: Store<appState.AppState>) { }
  // same as constructor and executed before constructor
  ngOnInit(): void {
    this.getAllIds();
    //this will fetch studentId's from store(to show)
    this.store.select(state => state.homeState.studentIds).subscribe(res => this.idList = res);
    this.store.select(state => state.homeState.studentList).subscribe(res => {
      this.studentData = res;
      if (this.studentData) {
        this.showData = true;
      }
    });
  };

  getAllIds() {
    this.store.dispatch({type: LOAD_SPINNER, payload: true}); // dispatching an action
    this.schoolService.getStudentIds();
  };

  idChange(event: any) {
    this.store.dispatch({type: LOAD_SPINNER, payload: true});
    this.schoolService.getStudentId(event);
  };

  ngOnDestroy() {
    console.log('AboutusComponent Destroyed');
  };

}
