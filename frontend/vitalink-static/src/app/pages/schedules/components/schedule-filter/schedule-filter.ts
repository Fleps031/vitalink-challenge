import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-filter',
  imports: [],
  templateUrl: './schedule-filter.html',
  styleUrl: './schedule-filter.scss',
})
export class ScheduleFilter {
  @Input() selectedValue: string;
  @Input() options: string[];
  @Input() label: string;

  @Output() selectOption: EventEmitter<string>;

  optionsOpened: boolean = false;

  constructor() {
    this.selectedValue = '';
    this.options = [];
    this.label = '';
    
    this.selectOption = new EventEmitter<string>();
  }

  openOptions(): void {
    this.optionsOpened = !this.optionsOpened;
  }


  onSelectOption(option: string): void {
    this.selectOption.emit(option);
  }
}
