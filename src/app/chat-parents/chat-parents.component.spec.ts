import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatParentsComponent } from './chat-parents.component';

describe('ChatParentsComponent', () => {
  let component: ChatParentsComponent;
  let fixture: ComponentFixture<ChatParentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatParentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
