/** External import */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/** Internal import */
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  isValidUser: boolean = true;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  /** Validate user */
  validateUser() {
    this._authenticationService.validateLogin(this.login).subscribe(
      (result: any) => {
        if (result && result.length > 0) {
          delete result[0].password;
          this._authenticationService.setUserDetail(result[0]);
          this.isValidUser = true;
          this._router.navigateByUrl("/note");
        }
        else {
          this.isValidUser = false;
        }
      },
      (error) => {
        this.isValidUser = false;
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

}
