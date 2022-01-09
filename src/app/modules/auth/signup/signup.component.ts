import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidator } from '../../../shared/validators/custom-validators';
import { User } from '../../../shared/models/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  errorMessage: string = '';
  success: boolean = true;
  isFormSubmitted: boolean = false;
  isSubmitting: boolean = false;

  constructor(private customValidator: CustomValidator,
    private router: Router,
    public _apiService: ApiService) { }

  ngOnInit(): void {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, this.customValidator.noEmptySpaceValidator, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      username: new FormControl(null, [Validators.required, this.customValidator.noEmptySpaceValidator]),
      name: new FormControl(null, [Validators.required, this.customValidator.noEmptySpaceValidator]),
    });
  }

  register() {
    this.isFormSubmitted = true;
    this.signupForm.markAllAsTouched();

    if(this.signupForm.valid) {
      this.isSubmitting = true;
      this._apiService.post('https://jsonplaceholder.typicode.com/users',
        this.signupForm.value)
      .then((res: any) => {
        if(res) {
          if(res.error) {
            this.success = false;
            this.errorMessage = res.error;
          } else {
            this.success = true;
            this.router.navigate(['rovers/']);
          }
        }
        this.isSubmitting = false;
      })
    }
  }

}
