import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsoldComponent } from './dialogsold.component';

describe('DialogsoldComponent', () => {
  let component: DialogsoldComponent;
  let fixture: ComponentFixture<DialogsoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
