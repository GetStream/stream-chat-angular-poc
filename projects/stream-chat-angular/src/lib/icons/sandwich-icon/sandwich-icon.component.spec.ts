import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichIconComponent } from './sandwich-icon.component';

describe('SandwichIconComponent', () => {
  let component: SandwichIconComponent;
  let fixture: ComponentFixture<SandwichIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
