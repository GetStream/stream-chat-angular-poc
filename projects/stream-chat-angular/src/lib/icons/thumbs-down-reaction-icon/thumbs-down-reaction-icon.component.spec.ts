import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsDownReactionIconComponent } from './thumbs-down-reaction-icon.component';

describe('ThumbsDownReactionIconComponent', () => {
  let component: ThumbsDownReactionIconComponent;
  let fixture: ComponentFixture<ThumbsDownReactionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbsDownReactionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsDownReactionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
