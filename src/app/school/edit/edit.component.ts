import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: string;
  studentEditForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private schoolService: SchoolService,
    // routes and route are doing two diffent actions for different purpose
    private route: ActivatedRoute
  ) {
    console.log('2');
  }

  ngOnInit(): void {
    console.log('3');
    this.createForm();
    // How to extract data from url params
    // we are calling the id which is in the url: this will use to get the data by using unique id
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('5');
    this.schoolService
      .getStudentById(this.id)
      // subscribe will execute only if you get return response from line 30 in service
      .subscribe(result => {
        console.log('7');
        this.patchStudentValues(result);
      });
  }

  createForm() {
    console.log('4');
    // creating the "studentCreateForm" as form type and this.fb.group make interaction with html and ts
    this.studentEditForm = this.fb.group({
      //studentId,studentName, studentPhoneNumber,country,course,year are the controls
      //Validators used for form value validations like input max and min length and also required
      studentId: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(7),
          Validators.minLength(3)
        ])
      ],
      studentName: [''],
      studentPhoneNumber: [''],
      country: [''],
      course: [''],
      year: ['']
    });
  }
  updateStudent(e: any) {
    console.log('editStudent function called');
    console.log(this.studentEditForm);
    console.log(e);
    e.preventDefault();
    // form validation
    if (this.studentEditForm.valid) {
      this.schoolService
        .getUpdateStudentInfo(this.studentEditForm.value)
        .subscribe(result => {
          console.log(result);
        });
    }
  }
  patchStudentValues(result: any) {
    console.log('8');
    // this will binding the data to each value in the form
    this.studentEditForm.patchValue({
      studentId: result.data.studentId,
      studentName: result.data.studentName,
      studentPhoneNumber: result.data.studentPhoneNumber,
      country: result.data.country,
      course: result.data.course,
      year: result.data.year
    });
  }
}
