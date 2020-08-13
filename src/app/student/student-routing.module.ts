import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentResultsComponent } from '../student-results/student-results.component';

const routes: Routes = [
  // children component used to show children component in other component
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'student-results', pathMatch: 'full' },
      { path: 'student-results', component: StudentResultsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
