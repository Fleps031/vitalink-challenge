import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-schedules-calendar',
  imports: [NgTemplateOutlet],
  templateUrl: './schedules-calendar.html',
  styleUrl: './schedules-calendar.scss',
})
export class SchedulesCalendar implements OnChanges {
  @Input() schedules: any[] = [];

  weekdays: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  weekDates: string[] = ['01/04', '02/04', '03/04', '04/04', '05/04', '06/04'];

  @Input() isScheduledList: boolean;

  constructor() {
    this.isScheduledList = true;
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['schedules']) {
      console.log(this.schedules)
      this.mapSchedulesByDay();
    }
  }

  mapSchedulesByDay(): { [key: string]: any[] } {
    const schedulesByDay: { [key: string]: any[] } = {};
    for (const schedule of this.schedules) {
      const day = schedule.date;
      if (!schedulesByDay[day]) {
        schedulesByDay[day] = [];
      }
      schedulesByDay[day].push(schedule);
    }

    return schedulesByDay;

  }

  getSchedulesForDay(day: string): any[] {
    const schedulesByDay = this.mapSchedulesByDay();
    return schedulesByDay[day] || [];
  }
}
