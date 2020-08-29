import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SchoolService } from 'src/app/school/school.service';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.scss']
})
export class StudentFilterComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.createForm();

  }
  searchStudent() {
    console.log('1')
    console.log(this.studentForm.value);
    let studentData = this.studentForm.value;
    this.schoolService.getStudentData(studentData);

  }
  createForm() {
    this.studentForm = this.fb.group({
      studentCourse: [],
      studentYear: [],
      studentId: [],
      studentPhoneNumber: []
    });
  }
}
