import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('user')) {
      this._router.navigate(['/rovers']);
      return false;
    } else {
      return true;
    }
  }
}
