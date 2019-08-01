import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewselComponent } from './newsel.component';

describe('NewselComponent', () => {
  let component: NewselComponent;
  let fixture: ComponentFixture<NewselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
