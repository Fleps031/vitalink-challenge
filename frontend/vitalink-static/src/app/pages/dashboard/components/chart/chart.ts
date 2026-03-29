import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.html'
})
export class ChartComponent implements AfterViewInit {

  @Input() type!: any;
  @Input() data!: any;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() height: number = 350; 

  @ViewChild('canvas') canvas!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {

    // 🚨 EVITA SSR (ESSENCIAL)
    if (!isPlatformBrowser(this.platformId)) return;

    new Chart(this.canvas.nativeElement, {
      type: this.type,
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}