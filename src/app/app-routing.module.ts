/** External import */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Internal import */
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
