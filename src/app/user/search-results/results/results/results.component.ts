import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { AppState } from 'src/app/reducer';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  listOfIds: Array<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(state => state.userState.studentList).subscribe(res => {
      this.listOfIds = res;
    })
  }

}
