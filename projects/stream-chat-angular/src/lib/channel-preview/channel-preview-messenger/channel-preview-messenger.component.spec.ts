import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPreviewMessengerComponent } from './channel-preview-messenger.component';

describe('ChannelPreviewMessengerComponent', () => {
  let component: ChannelPreviewMessengerComponent;
  let fixture: ComponentFixture<ChannelPreviewMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelPreviewMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPreviewMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
