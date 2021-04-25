import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSimpleComponent } from './message-simple.component';

describe('MessageSimpleComponent', () => {
  let component: MessageSimpleComponent;
  let fixture: ComponentFixture<MessageSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
