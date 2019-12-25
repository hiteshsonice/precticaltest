/** External import */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Internal import */
import { GnoteComponent } from './component/gnote.component';
import { AuthGuardService } from '../authentication/authguard.service';

const routes: Routes = [
    { path: "note", component: GnoteComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GNoteRoutingModule { }
