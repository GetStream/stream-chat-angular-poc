import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSeparatorComponent } from './date-separator.component';

describe('DateSeparatorComponent', () => {
  let component: DateSeparatorComponent;
  let fixture: ComponentFixture<DateSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
