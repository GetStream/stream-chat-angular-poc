import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAvatarComponent } from './message-avatar.component';

describe('MessageAvatarComponent', () => {
  let component: MessageAvatarComponent;
  let fixture: ComponentFixture<MessageAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
