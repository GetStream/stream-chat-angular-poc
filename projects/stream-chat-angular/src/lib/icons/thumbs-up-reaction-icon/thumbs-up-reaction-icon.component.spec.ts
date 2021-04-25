import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbsUpReactionIconComponent } from './thumbs-up-reaction-icon.component';

describe('ThumbsUpReactionIconComponent', () => {
  let component: ThumbsUpReactionIconComponent;
  let fixture: ComponentFixture<ThumbsUpReactionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbsUpReactionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbsUpReactionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
