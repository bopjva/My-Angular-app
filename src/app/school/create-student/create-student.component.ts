import { Component, OnInit } from '@angular/core';
import { checkForNumber } from '../../utils/custome-validators';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { SchoolService } from '../school.service';
import { StudentModel } from '../models/StudentModel';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  studentCreateForm: FormGroup;
  formSubmitStatus: boolean;
  res: any;
  successMessage: boolean = false;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) { }

  ngOnInit(): void {
    // if we want to render the form in html, we need run below call in ngoninit
    this.createForm();
    // below  syntax having subscribe will use to listen all the input data
    this.studentCreateForm.valueChanges.subscribe(formData => {
      console.log(formData.course);
      // reactive forms-Reactive validations
      if (formData.course || formData.year) {
        console.log('course value entered');
        this.studentCreateForm
          .get('year')
          .setValidators(Validators.compose([Validators.required]));
        this.studentCreateForm
          .get('year')
          .updateValueAndValidity({ emitEvent: false });
        this.studentCreateForm
          .get('course')
          .setValidators(Validators.compose([Validators.required]));
        this.studentCreateForm
          .get('course')
          .updateValueAndValidity({ emitEvent: false });
      } else {
        console.log('course value is still empty');
        this.studentCreateForm.get('year').setValidators([]);
        this.studentCreateForm
          .get('year')
          .updateValueAndValidity({ emitEvent: false });
        this.studentCreateForm.get('course').setValidators([]);
        this.studentCreateForm
          .get('course')
          .updateValueAndValidity({ emitEvent: false });
      }
    });
    //   below  syntax having subscribe will use to listen specific control  input data

    this.studentCreateForm.controls.studentName.valueChanges.subscribe(
      formData => {
        console.log(formData);
      }
    );
  }

  createForm() {
    // creating the "studentCreateForm" as form type and this.fb.group make interaction with html and ts
    this.studentCreateForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      studentName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
          checkForNumber
        ])
      ],
      studentPhoneNumber: [null],
      country: [null],
      course: [null],
      year: [null]
    });
  }

  createStudent() {
    // let s = 'karthik';
    // regular expressions
    // let r = /\d/.test(s);
    // console.log(r);
    console.log(this.studentCreateForm);
    this.formSubmitStatus = true;
    if (this.studentCreateForm.valid) {
      console.log('createStudent function called');
      console.log(this.studentCreateForm);
      let stuForm: StudentModel = this.studentCreateForm.value;
      this.schoolService
        .addStudent(this.studentCreateForm.value)
        .subscribe(result => {
          this.res = result;
          console.log(result);
          this.successMessage = true;
        }, (err) => {
          console.log(err);
        });
    }

  }

  // console.log(this.studentCreateForm);
}


// .subscribe((res) => {
  //success
// }, (err) => {
  //err
// })
