import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../../modules/services/api.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = <User>{};

  constructor(private _apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this._apiService._loggedIn.subscribe(res => {
      this.checkIfUserLoggedIn();
    });

    this.checkIfUserLoggedIn();
  }

  checkIfUserLoggedIn() {
    const user: any = this._apiService.getSessionStorageItem('user');
    if(user) {
      this.user = JSON.parse(user);
    }
  }

  logOut() {
    this._apiService.clearSession();
    this.user = <User>{};
    this.router.navigate(['/']);
    alert("Successfully logged out!");
  }

}
