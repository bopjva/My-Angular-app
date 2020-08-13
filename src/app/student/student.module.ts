import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentheaderComponent } from './student-header/studentheader.component';
import { StudentResultsComponent } from '../student-results/student-results.component';

@NgModule({
  declarations: [StudentComponent, StudentheaderComponent, StudentResultsComponent],
  imports: [CommonModule, StudentRoutingModule]
})
export class StudentModule {}
