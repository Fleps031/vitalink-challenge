import { Component } from '@angular/core';
import { ScheduleFilter } from "./components/schedule-filter/schedule-filter";

@Component({
  selector: 'app-schedules',
  imports: [ScheduleFilter],
  templateUrl: './schedules.html',
  styleUrl: './schedules.scss',
})
export class Schedules {
  selectedSpecialization: string;
  selectedDoctor: string
  selectedType: string;

  specializationOptions: string[] = ['Todos','Aparelho Digestivo', 'Cirurgia Plástica', 'Ginecologia', 'Nutricionista', 'Ortopedia']
  doctorOptions: string[] = ['Todos', 'Dr. João Silva', 'Dra. Maria Oliveira', 'Dr. Carlos Souza', 'Dra. Ana Pereira']
  surgeryOptions: string[] = ['Todos','Abdominoplastia', 'Lipoaspiração', 'Prótese de Glúteo', 'Plástica nos Seios', 'Prótese de Mama']


  constructor() {
    this.selectedSpecialization = this.specializationOptions[0];
    this.selectedDoctor = this.doctorOptions[0];
    this.selectedType = this.surgeryOptions[0];
  }

  changeSpecialization(specialization: string): void {
    this.selectedSpecialization = specialization;
  }

  changeDoctor(doctor: string): void {
    this.selectedDoctor = doctor;
  }

  changeType(type: string): void {
    this.selectedType = type;
  }

  
}
