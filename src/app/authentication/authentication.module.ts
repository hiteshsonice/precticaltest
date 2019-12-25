/** External import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
/** External import */
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
