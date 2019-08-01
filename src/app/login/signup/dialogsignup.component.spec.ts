import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsignupComponent } from './dialogsignup.component';

describe('DialogsignupComponent', () => {
  let component: DialogsignupComponent;
  let fixture: ComponentFixture<DialogsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
