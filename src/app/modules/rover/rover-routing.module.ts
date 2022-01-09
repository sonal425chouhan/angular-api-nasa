import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoverComponent } from './rover.component';
import { RoverDetailComponent } from './rover-detail/rover-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RoverComponent
  },
  {
    path: 'rover-detail/:id',
    component: RoverDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoverRoutingModule { }
