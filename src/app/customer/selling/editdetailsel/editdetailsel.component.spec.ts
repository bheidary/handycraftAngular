import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailselComponent } from './editdetailsel.component';

describe('EditdetailselComponent', () => {
  let component: EditdetailselComponent;
  let fixture: ComponentFixture<EditdetailselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdetailselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdetailselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
