import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // Remova CardComponent daqui se não for usar a TAG dele aqui
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}