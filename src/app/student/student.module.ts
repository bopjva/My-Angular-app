import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentheaderComponent } from './student-header/studentheader.component';

@NgModule({
  declarations: [StudentComponent, StudentheaderComponent],
  imports: [CommonModule, StudentRoutingModule]
})
export class StudentModule {}
