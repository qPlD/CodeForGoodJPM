import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatKidComponent } from './chat-kid.component';

describe('ChatKidComponent', () => {
  let component: ChatKidComponent;
  let fixture: ComponentFixture<ChatKidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatKidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
