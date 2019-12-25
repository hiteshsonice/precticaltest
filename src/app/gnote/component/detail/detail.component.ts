/** External import */
import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
/** Internal import */
import { GNoteService } from '../../gnote.service';

@Component({
  selector: 'gnote-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {
  noteForm: FormGroup;
  @Output() hasSave: EventEmitter<boolean> = new EventEmitter();
  @Input() note: any;

  constructor(private _gNoteService: GNoteService) { }

  /** Save note */
  save() {
    let data = this.noteForm.value;
    if (this.note) {
      data.id = this.note.id;
    }
    this._gNoteService.save(this.noteForm.value).subscribe(
      (result: any) => {
        if (result) {
          this.hasSave.emit(true);
          this.clearControls();
          this.note = null;
        }
      },
      (error) => {
        console.log(error);
      },
    )
  }

  /** Clear control */
  clearControls() {
    this.noteForm.setValue({
      "title": "",
      "body": ""
    });
    this.note = null;
  }

  /** Cancel */
  Cancel() {
    this.hasSave.emit(false);
  }

  /** Check changes */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.note.firstChange && changes.note.currentValue != changes.note.previousValue) {
      this.setFormValue();
    }
  }

  ngOnInit() {
    this.noteForm = new FormGroup({
      'title': new FormControl("", [Validators.required, Validators.maxLength(200)]),
      'body': new FormControl("", [Validators.required, Validators.maxLength(1000)])
    });
    this.setFormValue();
  }

  /** Set formValue */
  private setFormValue() {
    this.noteForm.setValue({
      "title": this.note ? this.note.title : "",
      "body": this.note ? this.note.body : ""
    });
  }
}


