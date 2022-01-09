import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (sessionStorage.getItem('user')) {
      return true;
    }
    alert("Session Expired!");
    this.router.navigate(['/']);
    return false;
  }
}
