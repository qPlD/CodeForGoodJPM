import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFunKidComponent } from './welcome-fun-kid.component';

describe('WelcomeFunKidComponent', () => {
  let component: WelcomeFunKidComponent;
  let fixture: ComponentFixture<WelcomeFunKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFunKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFunKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
