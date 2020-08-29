import { AbstractControl } from '@angular/forms';

export function checkForNumber(control: AbstractControl) {
  console.log(control.value);
  if (control.value == null || control.value == '') {
    return null;
  } else {
    console.log('else called');
    let r = /\d/.test(control.value);
    // if(r) {
    //   return { numberValidator: true }
    // } else {
    //   return null;
    // }
    return r ? { numberValidator: true } : null;
  }
}
export function checkSpecialCharacters() {}
