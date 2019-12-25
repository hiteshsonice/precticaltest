/** External import */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
/** Internal import */

@Injectable()
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  /** Validate login */
  validateLogin(login: any) {
    return this._http.get(`${environment.origin}/users?username=${login.username}&password=${login.password}`);
  }

  /** Set user detail */
  setUserDetail(user: any) {
    localStorage.setItem("userdata", JSON.stringify(user));
  }

  /** Get user data */
  getUserData() {
    return localStorage.getItem("userdata");
  }

  /** Remove data */
  removeData() {
    return localStorage.removeItem("userdata");
  }
}
