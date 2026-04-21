import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesCalendar } from './schedules-calendar';

describe('SchedulesCalendar', () => {
  let component: SchedulesCalendar;
  let fixture: ComponentFixture<SchedulesCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulesCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulesCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
