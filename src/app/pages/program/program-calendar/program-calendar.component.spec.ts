import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCalendarComponent } from './program-calendar.component';

describe('ProgramCalendarComponent', () => {
  let component: ProgramCalendarComponent;
  let fixture: ComponentFixture<ProgramCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
