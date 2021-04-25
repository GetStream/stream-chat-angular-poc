import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListDocsComponent } from './message-list-docs.component';

describe('MessageListDocsComponent', () => {
  let component: MessageListDocsComponent;
  let fixture: ComponentFixture<MessageListDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageListDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
