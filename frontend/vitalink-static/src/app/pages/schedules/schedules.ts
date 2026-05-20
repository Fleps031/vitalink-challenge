import { Component } from '@angular/core';
import { ScheduleFilter } from "./components/schedule-filter/schedule-filter";
import { SchedulesCalendar } from "./components/schedules-calendar/schedules-calendar";
import { ScheduleForm } from "./components/schedule-form/schedule-form";

@Component({
  selector: 'app-schedules',
  imports: [ScheduleFilter, SchedulesCalendar, ScheduleForm],
  templateUrl: './schedules.html',
  styleUrl: './schedules.scss',
})
export class Schedules {
  selectedSpecialization: string;
  selectedDoctor: string
  selectedType: string;


  filteredSchedules: any[] = [];
  foundSchedules: number = 0;

  specializationOptions: string[] = ['Todos','Aparelho Digestivo', 'Cirurgia Plástica', 'Ginecologia', 'Nutricionista', 'Ortopedia']
  doctorOptions: string[] = ['Todos', 'Dr. João Silva', 'Dra. Maria Oliveira', 'Dr. Carlos Souza', 'Dra. Ana Pereira']
  surgeryOptions: string[] = ['Todos','Abdominoplastia', 'Lipoaspiração', 'Prótese de Glúteo', 'Plástica nos Seios', 'Prótese de Mama']


  selectedTab = 'Disponibilidade';

  isModalOpen: boolean = false;

  availableSchedules: any[] = [
    { doctor: 'Dr. João Silva', specialization: 'Cirurgia Plástica', surgery: 'Abdominoplastia', date: 'Segunda', time: '14:00', patient: 'João Pedro' },
    { doctor: 'Dra. Maria Oliveira', specialization: 'Ginecologia', surgery: 'Plástica nos Seios', date: 'Segunda', time: '10:00', patient: 'Maria Santos' },
    { doctor: 'Dr. Carlos Souza', specialization: 'Ortopedia', surgery: 'Prótese de Mama', date: 'Terça', time: '09:00', patient: 'Carlos Almeida' },
    { doctor: 'Dra. Ana Pereira', specialization: 'Nutricionista', surgery: 'Lipoaspiração', date: 'Terça', time: '11:00', patient: 'Ana Costa' },
    { doctor: 'Dr. João Silva', specialization: 'Cirurgia Plástica', surgery: 'Lipoaspiração', date: 'Quarta', time: '15:00', patient: 'João Pedro' },
    { doctor: 'Dra. Maria Oliveira', specialization: 'Ginecologia', surgery: 'Prótese de Mama', date: 'Quarta', time: '13:00', patient: 'Maria Santos' },
    { doctor: 'Dr. Carlos Souza', specialization: 'Ortopedia', surgery: 'Prótese de Glúteo', date: 'Quinta', time: '08:00', patient: 'Carlos Almeida' },
    { doctor: 'Dra. Ana Pereira', specialization: 'Nutricionista', surgery: 'Plástica nos Seios', date: 'Quinta', time: '12:00', patient: 'Ana Costa' },
    { doctor: 'Dr. João Silva', specialization: 'Cirurgia Plástica', surgery: 'Prótese de Glúteo', date: 'Sexta', time: '16:00', patient: 'João Pedro' },
    { doctor: 'Dra. Maria Oliveira', specialization: 'Ginecologia', surgery: 'Abdominoplastia', date: 'Sexta', time: '14:00', patient: 'Maria Santos' },
    { doctor: 'Dr. Carlos Souza', specialization: 'Aparelho Digestivo', surgery: 'Plástica nos Seios', date: 'Sábado', time: '10:00', patient: 'Carlos Almeida' },
  ]

  scheduledAppointments: any[] = [];

  constructor() {
    this.selectedSpecialization = this.specializationOptions[0];
    this.selectedDoctor = this.doctorOptions[0];
    this.selectedType = this.surgeryOptions[0];
    this.filteredSchedules = this.availableSchedules;
    this.foundSchedules = this.filteredSchedules.length;
    this.scheduledAppointments = this.availableSchedules.map(schedule => ({
      ...schedule,
      patientName: schedule.patient
    }));
  }

  changeSpecialization(specialization: string): void {
    this.selectedSpecialization = specialization;
    this.filterSchedules();
  }

  changeDoctor(doctor: string): void {
    this.selectedDoctor = doctor;
    this.filterSchedules();
  }

  changeType(type: string): void {
    this.selectedType = type;
    this.filterSchedules();
  }

  private filterSchedules(): void {
    this.filteredSchedules = this.availableSchedules.filter(schedule => {
      const matchesSpecialization = this.selectedSpecialization === 'Todos' || schedule.specialization === this.selectedSpecialization;
      const matchesDoctor = this.selectedDoctor === 'Todos' || schedule.doctor === this.selectedDoctor;
      const matchesType = this.selectedType === 'Todos' || schedule.surgery === this.selectedType;
      return matchesSpecialization && matchesDoctor && matchesType;
    });
    
    this.foundSchedules = this.filteredSchedules.length;

    console.log('Filtered Schedules:', this.filteredSchedules);
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onCreateAppointment(appointment: any) {
    const conflict = this.availableSchedules.some(s => s.doctor === appointment.doctor && s.date === appointment.date && s.time === appointment.time);
    if (conflict) {
      alert('Horário não disponível');
      return;
    }
    this.scheduledAppointments.push(appointment);
    this.closeModal();
  }
}
