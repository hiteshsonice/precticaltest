/** External import */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/** Internal import */
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from "./authentication/authentication.module";
import { GnoteModule } from './gnote/gnote.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './comman/confirmation/confirmation.component';
import { HttpInterceptorService } from './authentication/httpinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    AuthenticationModule,
    GnoteModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationComponent]
})
export class AppModule { }
