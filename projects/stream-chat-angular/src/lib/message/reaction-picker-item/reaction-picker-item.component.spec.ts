import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionPickerItemComponent } from './reaction-picker-item.component';

describe('ReactionPickerItemComponent', () => {
  let component: ReactionPickerItemComponent;
  let fixture: ComponentFixture<ReactionPickerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionPickerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionPickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
