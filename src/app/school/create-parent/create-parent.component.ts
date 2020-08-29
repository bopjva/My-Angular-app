import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { checkForNumber } from '../../utils/custome-validators';

@Component({
  selector: 'app-create-parent',
  templateUrl: './create-parent.component.html',
  styleUrls: ['./create-parent.component.scss']
})
export class CreateParentComponent implements OnInit {
  parentCreateForm: FormGroup;
  parentId: number;
  formSubmitStatus: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.createForm;
    this.createForm();
    this.parentCreateForm.valueChanges.subscribe(formData => {
      // console.log(formData.parentName);
      // reactive forms-Reactive validations
      if (formData.parentName || formData.parentPhoneNumber) {
        // console.log('Parent Phone Number is entered');
        this.parentCreateForm
          .get('parentName')
          .setValidators(
            Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(10),
              checkForNumber
            ])
          );
        this.parentCreateForm
          .get('parentName')
          .updateValueAndValidity({ emitEvent: false });
        this.parentCreateForm
          .get('parentPhoneNumber')
          .setValidators(Validators.compose([Validators.required]));
        this.parentCreateForm
          .get('parentPhoneNumber')
          .updateValueAndValidity({ emitEvent: false });
      } else {
        console.log('Parent Phone Number is empty');
        this.parentCreateForm.get('parentName').setValidators([]);
        this.parentCreateForm.updateValueAndValidity({ emitEvent: false });
        this.parentCreateForm.get('parentPhoneNumber').setValidators([]);
        this.parentCreateForm.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  // createParent1 = () => {

  // }
  createParent() {
    console.log('createParent function called');
    console.log(this.parentCreateForm);
    this.formSubmitStatus = true;
  }

  createForm() {
    this.parentCreateForm = this.fb.group({
      parentName: [''],
      parentPhoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ])
      ],
      emailId: [],
      age: []
    });
  }
}
