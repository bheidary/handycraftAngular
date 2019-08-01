import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterandComponent } from './filterand.component';

describe('FilterandComponent', () => {
  let component: FilterandComponent;
  let fixture: ComponentFixture<FilterandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
