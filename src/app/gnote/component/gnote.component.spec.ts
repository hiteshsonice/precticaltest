import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnoteComponent } from './gnote.component';

describe('GnoteComponent', () => {
  let component: GnoteComponent;
  let fixture: ComponentFixture<GnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
