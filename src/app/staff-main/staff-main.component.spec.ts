import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMainComponent } from './staff-main.component';

describe('StaffMainComponent', () => {
  let component: StaffMainComponent;
  let fixture: ComponentFixture<StaffMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
