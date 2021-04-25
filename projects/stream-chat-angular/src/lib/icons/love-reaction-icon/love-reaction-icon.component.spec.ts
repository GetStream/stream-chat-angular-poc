import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveReactionIconComponent } from './love-reaction-icon.component';

describe('LoveReactionIconComponent', () => {
  let component: LoveReactionIconComponent;
  let fixture: ComponentFixture<LoveReactionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveReactionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveReactionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
