/** External import */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
/** Internal import */
import { GnoteComponent } from './component/gnote.component';
import { DetailComponent } from './component/detail/detail.component';
import { GNoteRoutingModule } from './gnote-router.module';
import { GNoteService } from './gnote.service';

@NgModule({
  declarations: [GnoteComponent, DetailComponent],
  imports: [
    CommonModule,
    GNoteRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GNoteService]
})
export class GnoteModule { }
