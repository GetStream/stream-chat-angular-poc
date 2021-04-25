import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolReactionIconComponent } from './lol-reaction-icon.component';

describe('LolReactionIconComponent', () => {
  let component: LolReactionIconComponent;
  let fixture: ComponentFixture<LolReactionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LolReactionIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LolReactionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
