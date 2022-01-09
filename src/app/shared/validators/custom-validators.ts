import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class CustomValidator {
  constructor() {}

  noEmptySpaceValidator(control: FormControl) {
    const controlValue = control.value ? control.value.toString() : '';
    const isWhitespace = controlValue.trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { emptyspace: true };
  }

}
