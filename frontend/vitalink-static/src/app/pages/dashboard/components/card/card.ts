import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-content">
        <p class="card-title">{{ data.title }}</p>
        <h2 class="card-value">{{ data.value }}</h2>
        
        <div class="card-footer">
          <span [ngClass]="{
            'badge-up': data.type === 'up',
            'badge-down': data.type === 'down',
            'badge-neutral': data.type === 'neutral'
          }" class="badge">
            {{ data.type === 'up' ? '+' : '' }}{{ data.change }}
          </span>
          <span class="vs-text">vs mês anterior</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() data: any;
}