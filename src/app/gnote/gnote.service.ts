/** External */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
/** Internal */

@Injectable()
export class GNoteService {

  constructor(private _http: HttpClient) { }

  /** Save Note */
  save(note: any) {
    if (note.id) {
      return this._http.put(`${environment.origin}/notes/${note.id}`, note);
    }
    else {
      return this._http.post(`${environment.origin}/notes`, note);
    }
  }

  /** Get List */
  getList() {
    return this._http.get(`${environment.origin}/notes`);
  }

  /** Delete note */
  deleteNote(note) {
    return this._http.delete(`${environment.origin}/notes/${note.id}`);
  }
}
