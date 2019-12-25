import { TestBed } from '@angular/core/testing';

import { GNoteService } from './gnote.service';

describe('GnoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GNoteService = TestBed.get(GNoteService);
    expect(service).toBeTruthy();
  });
});
