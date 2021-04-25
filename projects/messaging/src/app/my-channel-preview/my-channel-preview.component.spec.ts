import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChannelPreviewComponent } from './my-channel-preview.component';

describe('MyChannelPreviewComponent', () => {
  let component: MyChannelPreviewComponent;
  let fixture: ComponentFixture<MyChannelPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChannelPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChannelPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
