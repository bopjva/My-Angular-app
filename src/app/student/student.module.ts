import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentheaderComponent } from './student-header/studentheader.component';
import { StudentResultsComponent } from '../student-results/student-results.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentComponent, StudentheaderComponent, StudentResultsComponent, StudentFilterComponent, StudentTableComponent],
  imports: [CommonModule, StudentRoutingModule, FormsModule, ReactiveFormsModule]
})
export class StudentModule { }
