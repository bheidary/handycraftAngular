import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdelistComponent } from './dialogdelist.component';

describe('DialogdelistComponent', () => {
  let component: DialogdelistComponent;
  let fixture: ComponentFixture<DialogdelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
