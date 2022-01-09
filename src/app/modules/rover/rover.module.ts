import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoverRoutingModule } from './rover-routing.module';
import { RoverComponent } from './rover.component';
import { RoverDetailComponent } from './rover-detail/rover-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    RoverComponent,
    RoverDetailComponent
  ],
  imports: [
    CommonModule,
    RoverRoutingModule,
    SharedModule
  ]
})
export class RoverModule { }
