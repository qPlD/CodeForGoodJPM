import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatParents2Component } from './chat-parents2.component';

describe('ChatParents2Component', () => {
  let component: ChatParents2Component;
  let fixture: ComponentFixture<ChatParents2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatParents2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatParents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
