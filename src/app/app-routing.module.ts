import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LoggedInAuthGuard } from './core/guards/logged-in-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInAuthGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'rovers',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/rover/rover.module').then(m => m.RoverModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
