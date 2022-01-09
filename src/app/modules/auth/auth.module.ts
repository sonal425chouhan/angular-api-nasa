import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
