/** External import */
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
/** Internal import */
import { GNoteService } from '../gnote.service';
import { ConfirmationComponent } from '../../comman/confirmation/confirmation.component';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-gnote',
  templateUrl: './gnote.component.html',
  styleUrls: ['./gnote.component.css']
})
export class GnoteComponent implements OnInit {
  noteList: any;
  isAddNote: boolean = false;
  note: any;
  message: string;
  userDetails: any;
  constructor(
    private _gNoteService: GNoteService,
    private _modalService: NgbModal,
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }

  /** Load data */
  hasSave(event) {
    if (event) {
      this.getNoteList();
      this.isAddNote = false;
      this.message = "Note save Successfully";
    }
    else {
      this.isAddNote = false;
    }
  }

  /** Add note */
  addNote() {
    this.note = null;
    this.isAddNote = !this.isAddNote;
    this.message = "";
  }

  /** Edit  */
  editDetail(data) {
    this.note = data;
    this.isAddNote = true;
    this.message = "";
  }

  /** Delete note */
  deleteNote(data) {
    let dialog = this._modalService.open(ConfirmationComponent, { "backdrop": "static", "keyboard": false });
    dialog.componentInstance.data = data;
    dialog.result.then(
      (response: any) => {
        if (response) {
          this._gNoteService.deleteNote(data).subscribe(
            (result: any) => {
              if (result) {
                this.message = "Note delete Successfully";
                this.getNoteList();
              }
            },
            (error) => { console.log(error); })
        }
      });
  }

  /** Logout */
  logout() {
    this._authenticationService.removeData();
    this._router.navigateByUrl("/login");
  }

  ngOnInit() {
    this.userDetails = JSON.parse(this._authenticationService.getUserData());
    this.getNoteList();
  }

  /** Get note list */
  private getNoteList() {
    this._gNoteService.getList().subscribe(
      (result: any) => {
        this.noteList = result;
      },
      (error) => {
        console.log(error);
      },
    )
  }
}
