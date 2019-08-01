import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailselComponent } from './detailsel.component';

describe('DetailselComponent', () => {
  let component: DetailselComponent;
  let fixture: ComponentFixture<DetailselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
