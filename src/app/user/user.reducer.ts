import { GET_ALL_STUDENTS } from '../action';


export interface UserState {
  studentList: Array<string>
}
export const USER_INITIAL_STATE: UserState = {
  studentList: []
}

export function userReducer(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, studentList: action.payload }

      break;

    default:
      break;
  }
}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CreateComponent } from './create/create.component';
// import { SearchComponent } from './search/search.component';
// import { EditComponent } from './edit/edit.component';
// import { DeleteComponent } from './delete/delete.component';


// import { UserRoutingModule } from './user-routing.module';
// import { ResultsComponent } from './search-results/results/results/results.component';
// import { SearchResultsComponent } from './search-results/search-results/search-results.component';
// import { RouterModule } from '@angular/router';


// @NgModule({
//   declarations: [CreateComponent, SearchComponent, EditComponent, DeleteComponent, ResultsComponent, SearchResultsComponent],
//   imports: [
//     CommonModule,
//     // RouterModule,
//     UserRoutingModule
//   ]
// })
// export class UserModule { }