import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-form',
  imports: [FormsModule],
  templateUrl: './schedule-form.html',
  styleUrl: './schedule-form.scss',
})
export class ScheduleForm {
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() createAppointment = new EventEmitter<any>();

  appointment = {
    doctor: '',
    specialization: '',
    surgery: '',
    date: '',
    time: '',
    patientName: ''
  };

  doctorOptions = ['Dr. João Silva', 'Dra. Maria Oliveira', 'Dr. Carlos Souza', 'Dra. Ana Pereira'];
  specializationOptions = ['Aparelho Digestivo', 'Cirurgia Plástica', 'Ginecologia', 'Nutricionista', 'Ortopedia'];
  surgeryOptions = ['Abdominoplastia', 'Lipoaspiração', 'Prótese de Glúteo', 'Plástica nos Seios', 'Prótese de Mama'];

  onSubmit() {
    this.createAppointment.emit(this.appointment);
    this.appointment = { doctor: '', specialization: '', surgery: '', date: '', time: '', patientName: '' };
  }

  onCancel() {
    this.closeModal.emit();
  }
}
