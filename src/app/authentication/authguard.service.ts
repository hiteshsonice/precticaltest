/** External import */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
/** Internal import */
import { AuthenticationService } from "./authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  canActivate(): boolean {
    if (this._authenticationService.getUserData()) {
      return true;
    }
    else {
      this._router.navigate(["login"])
      return false;
    }
  }
}
