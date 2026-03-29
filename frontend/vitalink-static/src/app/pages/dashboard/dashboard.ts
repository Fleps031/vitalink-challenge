import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { ChartComponent } from './components/chart/chart';
import { CardComponent } from './components/card/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ChartComponent, CardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  BLUE = '#2563EB';

  // Função auxiliar para cores
  alphaColor(hex: string, a: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  // MÉTRICAS DOS CARDS
  cards = [
    { title: 'Tempo Médio de Resposta', value: '3,4 min', change: '12%', type: 'up' },
    { title: 'Taxa de Conversão', value: '32%', change: '5,8%', type: 'down' },
    { title: 'Total de Atendimentos', value: '1.245', change: '8,5%', type: 'up' },
    { title: 'Taxa de Faltas (No-Show)', value: '11,2%', change: '3,2%', type: 'neutral' }
  ];

  // 1 - GRÁFICO ATENDIMENTOS
  atendimentosData = {
    labels: ['1 Mar', '3 Mar', '5 Mar', '7 Mar', '9 Mar'],
    datasets: [{
      label: 'Atendimentos',
      data: [42, 38, 55, 61, 49],
      borderColor: this.BLUE,
      backgroundColor: this.alphaColor(this.BLUE, 0.15),
      fill: true,
      tension: 0.4
    }]
  };

  // 2 - GRÁFICO PICO
  picoData = {
    labels: ['06h', '07h', '08h', '09h', '10h'],
    datasets: [{
      label: 'Contatos',
      data: [12, 18, 25, 44, 67],
      backgroundColor: this.alphaColor(this.BLUE, 0.6)
    }]
  };

  // 3 - GRÁFICO RESPOSTA (O que estava dando erro)
  respostaData = {
    labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
    datasets: [{
      label: 'Minutos',
      data: [6.2, 5.8, 5.1, 4.7],
      borderColor: this.BLUE,
      backgroundColor: this.alphaColor(this.BLUE, 0.15),
      fill: true
    }]
  };

  // 4 - GRÁFICO AGENDAMENTO (O que estava dando erro)
  agendamentoData = {
    labels: ['Clínica', 'Pediatria', 'Cardio', 'Orto', 'Dermo'],
    datasets: [{
      label: 'Horas',
      data: [18, 13, 8, 10, 12],
      backgroundColor: this.alphaColor(this.BLUE, 0.7)
    }]
  };

  // 5 - GRÁFICO NO-SHOW (O que estava dando erro)
  noShowData = {
    labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
    datasets: [{
      label: '%',
      data: [16.4, 15.1, 14.3, 13.7],
      borderColor: this.BLUE,
      backgroundColor: this.alphaColor(this.BLUE, 0.12),
      fill: true
    }]
  };

  // 6 - GRÁFICO CONVERSÃO
  conversaoData = {
    labels: ['Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'],
    datasets: [{
      label: 'Conversão',
      data: [24.5, 27.3, 30.1, 35.8, 33.2, 32],
      backgroundColor: this.alphaColor(this.BLUE, 0.7)
    }]
  };

  // 7 - GRÁFICO CANAL
  canalData = {
    labels: ['WhatsApp', 'Instagram'],
    datasets: [{
      data: [834, 411],
      backgroundColor: [this.alphaColor(this.BLUE, 0.9), this.alphaColor(this.BLUE, 0.5)]
    }]
  };

  // 8 - GRÁFICO ESPECIALIDADES
  especialidadesData = {
    labels: ['Clínica', 'Pedia', 'Cardio', 'Orto', 'Dermo'],
    datasets: [{
      label: 'Agendamentos',
      data: [312, 248, 195, 178, 142],
      backgroundColor: this.alphaColor(this.BLUE, 0.6)
    }]
  };

  // 9 - GRÁFICO ATENDENTES
  atendentesData = {
    labels: ['Ana', 'Carlos', 'Juliana', 'Roberto'],
    datasets: [
      { label: 'Contatos', data: [312, 278, 255, 241], backgroundColor: this.alphaColor(this.BLUE, 0.7) },
      { label: 'Consultas', data: [118, 87, 94, 71], backgroundColor: this.alphaColor(this.BLUE, 0.4) }
    ]
  };

  // 10 - GRÁFICO RADAR
  radarData = {
    labels: ['Velocidade', 'Conversão', 'Satisfação', 'Volume', 'Faltas', 'Qualidade'],
    datasets: [{
      label: 'Desempenho',
      data: [88, 76, 92, 95, 80, 90],
      borderColor: this.BLUE,
      backgroundColor: this.alphaColor(this.BLUE, 0.2)
    }]
  };
}