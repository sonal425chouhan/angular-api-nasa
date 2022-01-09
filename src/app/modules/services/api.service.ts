import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _loggedIn: Subject<any> = new Subject();

  constructor() { }

  async post(url: string, data: User): Promise<any> {
    try {
      const res: any = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const userData = await res.json();
      this.setSessionStorageItem('user', JSON.stringify(userData));
      this.loggedIn();
      alert("Successfully Registered!");
      return 'Successfully Registered';
    } catch(error: any) {
      return await {error: error};
    }
  }

  async get(url: string): Promise<any> {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch(error: any) {
      return await {error: error};
    }
  }

  loggedIn() {
    this._loggedIn.next();
  }

  setSessionStorageItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  getSessionStorageItem(key: string) {
    return sessionStorage.getItem(key);
  }

  clearSession() {
    sessionStorage.clear();
  }

}
