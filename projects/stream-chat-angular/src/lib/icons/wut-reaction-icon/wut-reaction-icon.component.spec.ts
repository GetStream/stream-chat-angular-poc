import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WutReactionIconComponent } from './wut-reaction-icon.component';

describe('WutReactionIconComponent', () => {
  let component: WutReactionIconComponent;
  let fixture: ComponentFixture<WutReactionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WutReactionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WutReactionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
